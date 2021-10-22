## Difference between Types and Interface in TypeScript

- Modern Typescript types and interfaces are both very powerful (2020)
- It is almost down to personal choice, these days.

### Key differences:

- The type alias can also be used for other types such as primitives,
  unions, and tuples.
- Unlike a type alias, an interface can be defined multiple times,
  and will be treated as a single interface

### Decision on when to use:

- Personally, I use the interface to make it clear that it
  is intended to be implemented and types for everything else.

```js
// type
type Person = {
  name: string,
  age: number,
};

type speak = (sentence: string) => void;

// interface
interface Person extends Human {
  name: string;
  age: number;
}

interface speak {
  (sentence: string): void;
}
```
