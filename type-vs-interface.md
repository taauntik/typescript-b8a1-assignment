# Difference Between `type` and `interface` in TypeScript

In TypeScript, both `type` and `interface` are used to define the
structure of data. They look similar, especially when defining objects,
but there are some differences.

### Difference between `type` and `interface`

1.  `interface` is used to define the type for objects.
2.  `type` can be used to define object types, unions,
    arrays, tuples, and function types etc.
3.  An existing `interface` can be extended using `extends`. It also
    supports declaration merging, which means you can declare the same
    interface multiple times.
4.  You can't redeclare an existing `type` with the same name. But,
    you can combine types using intersections (`&`).
5.  Both `interface` and `type` can be used with classes and can
    describe object properties and methods.

### Examples

``` typescript
interface User {
    name: string;
}

interface User {
    age: number;
}

// Both declarations are combined.
```

With type alias:

``` typescript
type ID = string | number;
```

### When should you use them?

I usually prefer `interface` when defining the types for an object.

I use `type` when I need unions, tuples, string, number and boolean aliases, or to
combine different types.

There is no need to choose only one. Both are useful and important.
