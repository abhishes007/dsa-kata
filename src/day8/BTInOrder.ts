////function walk(curr: BinaryNode<number> | null, path: number[]): void
function walk(curr: BinaryNode<number> | null, path: number[]): number[] 
  {
    //Base case : When reached last node and cannot recurse anymore.
    if(!curr) {
        return path;
    }

    //Pre-recurse
    

    //Recurse
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);

    //Post-recurse
    return path;

}
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}