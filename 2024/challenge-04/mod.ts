const path = import.meta.resolve("./network.txt");
const file = Deno.readTextFileSync(
    new URL(path),
);

function findSafeNodes(data: [number, number][]): number[] {
    const graph: Map<number, number[]> = new Map();

    for (const [a, b] of data) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);

        graph.get(a)!.push(b);
        graph.get(b)!.push(a);
    }

    const components: number[][] = [];
    const visited = new Set<number>();

    function dfs(node: number, component: number[]) {
        component.push(node);
        visited.add(node);

        for (const neighbor of graph.get(node) || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (const node of graph.keys()) {
        if (!visited.has(node)) {
            const component: number[] = [];

            dfs(node, component);
            components.push(component);
        }
    }

    const safeNodes: number[] = [];
    for (const component of components) {
        if (component.length < 3) {
            safeNodes.push(...component);
        }
    }

    return safeNodes.sort((a, b) => a - b);
}

const data: [number, number][] = JSON.parse(file);
const nodes = findSafeNodes(data).join(",");

console.log(nodes);
