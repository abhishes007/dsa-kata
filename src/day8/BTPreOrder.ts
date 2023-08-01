////function walk(curr: BinaryNode<number> | null, path: number[]): void
function walk(curr: BinaryNode<number> | null, path: number[]): number[] 
  {
    //Base case : When reached last node and cannot recurse anymore.
    if(!curr) {
        return path;
        //return;
    }

    //Pre-recurse
    path.push(curr.value);

    //Recurse
    walk(curr.left, path);
    walk(curr.right, path);

    //Post-recurse
    return path;

}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    //const path: number[] = [];
    //walk(head, path);
    //return path;
    return walk(head, []);
}