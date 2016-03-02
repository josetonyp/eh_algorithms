# DISCUSSION OVER SOME ALGORITHMS

## Tree Traversals Algorithms

Deep First Traversal

Is an algorithm to traverse a tree by first visiting the child of a node in case of existing instead of the sibling of the current parent's node. By oposition to "Breath First", when the traverse choice is to visit first the sibling of the current parent's node.
This algorithm makes use of an stack to track the visited nodes and a list to track the output. The algorithm works by adding into the **visited node's stack** and the **output list** the current visited node. In case the current visited node is a *leaf*, this node is removed from the **visited node's stack** and then pointer is moved to the next node of the stack (that will be the parent of this current node) so a new child of this revisited parent node is tagerted to be visited. In case there is no more children to visit the current visited node is remove from the **visited node's stack** and and then pointer is moved to the next node of the stack. The algorithm finish when the stack is empty.

## Searching for charactern in some strings


Implementation of 2 search algorithms for characters in an String. 

implementation in: ```lib/find_chars.js```

Tests in : ```spec/lib/chars_in_string_spec.js```

```
npm run test-lib
```

## Array Manipuilation

### Sorted Array Compact

implementation in: ```lib/arrays.js```

Tests in : ```spec/lib/array_compact_spec.js```

```
npm run test-lib
```


### Array Rotation

implementation in: ```lib/arrays.js```

Tests in : ```spec/lib/rotate_array_spec.js```

```
npm run test-lib
```

### Least Common Multiple

Calculate the LCM of a list of integers using a algorithm by reducing the minimun prime factor of the list until no further reduction is possible.

implementation in: ```lib/arrays.js```

Tests in : ```spec/lib/lcm_spec.js```

```
npm run test-lib
```

### Angular TODO app

Implemeting a simple Angular TODO app with PouhDB and 10 secs synchronization.

implementation in: ```app/todo/*```

Tests in : ```spec/app/*```

```
npm test
```
