export function aStar(grid, startNode, finishNode) {
    const openSet = [];
    const closedSet = [];
    startNode.distance = 0;
    startNode.heuristic = heuristic(startNode, finishNode);
    openSet.push(startNode);

    while (openSet.length > 0) {
        sortNodesByTotalCost(openSet);
        const currentNode = openSet.shift();
        closedSet.push(currentNode);

        if (currentNode === finishNode) {
            return closedSet;
        }

        const neighbors = getNeighbors(currentNode, grid);
        for (const neighbor of neighbors) {
            if (!closedSet.includes(neighbor) && !neighbor.isWall) {
                const tentativeGScore = currentNode.distance + 1;

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                } else if (tentativeGScore >= neighbor.distance) {
                    continue;
                }

                neighbor.previousNode = currentNode;
                neighbor.distance = tentativeGScore;
                neighbor.heuristic = heuristic(neighbor, finishNode);
            }
        }
    }

    return closedSet;
}

function heuristic(node, finishNode) {
    const dx = Math.abs(node.row - finishNode.row);
    const dy = Math.abs(node.col - finishNode.col);
    return dx + dy; // Manhattan distance
}

function sortNodesByTotalCost(nodes) {
    nodes.sort((nodeA, nodeB) => (nodeA.distance + nodeA.heuristic) - (nodeB.distance + nodeB.heuristic));
}

function getNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors;
}
