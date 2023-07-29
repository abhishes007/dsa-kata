// Here the problem is to understand recursion.
// Given a maze how do we traverse out from our start point to end point.
// Assume the maze is an array or strings ["#####E#", "#______#", "#S####"]
// In the above array # - is a wall, _ is the path, S is start point, E is endpoint.
// To solve the best way would be to check all four directions from start point and then recurse.
// Base cases - 1) Off the map, 2) If we run into a wall, 3) Its the end, 4) Have visited the same tile/path.
// Base cases require us to know where we are at and recursive cases allow us to walk the path.
// 3 steps of recursion : Pre-recursion, Recursion, Post-Recursion

//Directions to walk.
const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    //Base case 1: OFf the map
    if(curr.x < 0 || curr.x >= maze[0].length ||
       curr.y < 0 || curr.y >= maze[0].length) {
        return false;
    }

    // Base case 2: On a wall
    if(maze[curr.y][curr.x] === wall) {
        return false;
    }

    //Base case 3: Its the end
    if(curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    //Base case 4: We have seem/been on the path
    if(seen[curr.y][curr.x]) {
        return false;
    }

    //Pre-recursion
    seen[curr.y][curr.x] = true;
    path.push(curr);

    //Recursion
    for(let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if(walk(maze, wall, {
            x: curr.x + x,
            y: curr.y +y
        }, end, seen, path)) {
            return true;
        }
    }

    //Post-recursion
    path.pop();

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for(let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze,wall, start, end, seen, path);

    return path;
}