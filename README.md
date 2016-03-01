*** Tree Traversals Algorithms

Deep First Traversal

Is an algorithm to traverse a tree by visiting first the child of a node in case of existing instead of the sibling of the current parent's node. By oposition to breath first when the traverse choose is to visit first the the sibling of the current parent's node.
This algorithm make use of an stack to track the visited nodes and a list to track the output. The algorithm works by adding into the visited node's stack and the output list the current visit node. In the case the node is a leaf the current visited node is remove from the stack and the the current visited node is moved the next in the stack (that will be the parent of this node) and a new child is serch in this revisited node.



