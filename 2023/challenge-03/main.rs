use std::fs::File;
use std::io::{self, prelude::*, BufReader};

fn main() -> io::Result<()> {
    let path = std::env::current_dir()?
        .join("2023")
        .join("challenge-03")
        .join("encryption_policies.txt");

    let file = File::open(&path)?;
    let reader = BufReader::new(file);

    let invalid_key = reader
        .lines()
        .filter_map(|line| {
            let line = line.ok()?;
            let mut parts = line.split(": ");

            let mut policy_parts = parts.next()?.split_whitespace();
            let mut range_parts = policy_parts.next()?.split('-');

            let (symbol, content) = (policy_parts.next()?, parts.next()?);
            let (min, max) = (
                range_parts.next()?.parse().ok()?,
                range_parts.next()?.parse().ok()?,
            );

            let symbol_count = content.matches(symbol).count();

            if (min..=max).contains(&symbol_count) {
                None
            } else {
                Some(content.to_string())
            }
        })
        .nth(41); // The 12th element in the array corresponds to the sudo password.

    println!(
        "{}",
        invalid_key.unwrap_or_else(|| "No 42nd invalid key found.".to_string())
    );

    Ok(())
}
