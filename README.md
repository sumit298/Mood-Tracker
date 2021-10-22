## Learning TypeScript

### Basic Types

```ts
let id: number = 6;
let Name: string = 'Sumit';
let isGraduate: boolean = true;
let x: any = true;
```

### Array declaration

```ts
let ids: number[] = [1, 2, 5, 54, 67];
let languages: string[] = ['Java', 'JavaScript', 'C++', 'TypeScript'];
let booleanArr: boolean[] = [true, false];
let anyArr: any[] = [1, 'Java', true];

ids.push(5);
```

### Tuples

- for multityping better than any. but follows the pattern in which way u defined

```ts
let myself: [number, string, boolean] = [1, 'sumit', true];

//  Tuples array
let employees: [number, string][] = [
  [1, 'Sumit'],
  [2, 'Gina'],
  // ['Edge',3] throws error
  [3, 'Edge'],
  [4, 'Rachit'],
];
```

### Union - to hold variable more than one types, use '|' sign

```ts
let pid: number | string;

pid = 45;
pid = 'Cooperate';
```

### Enums

- Enums (object of constant = according to me) by default,
- they have numeric value starting from 0

```ts
enum direction1 {
  up = 1000,
  down,
  left,
  right,
}
// up = 0, down = 1 , left = 2, right = 3 by default

console.log(direction1.down);

enum direction2 {
  up = 'North',
  down = 'South',
  left = 'East',
  right = 'West',
}
```

### Objects

```ts
// Method=1 of declaring object look messy
let user: {
  id: number;
  name: string;
} = {
  id: 4,
  name: 'Sumit',
};

// Method=2 of declaring object and you will see like this in real world

type User = {
  id: number;
  name: string;
};

let user2: User = {
  id: 2,
  name: 'Ravi',
};
```

### Type Assertion

- we are explicitly telling compiler that, we want treat a entity as different types

```ts
let cid: any = 1;
// Syntax 1 of expressing type assertion
let customerId = <number>cid;
// Syntax 2
let customerId2 = cid as number;

// Functions

function sumOfTwo(x: number, y: number): number {
  return x + y;
}

console.log(sumOfTwo(2, 5));

// When functions do not have a return value, use void

function logMessage(message: string | number): void {
  console.log(message);
}

logMessage('Good Night');
```

### Interface

- Interfaces mainly use with the objects, not to be used in primitive data types for primitives use type

```ts
interface userInterface {
  // For preventing the properites to not to be changed use 'readonly'
  readonly id: number;
  name: string;
  // For optional properties use '?'
  age?: number;
}

const user3: userInterface = {
  id: 4,
  name: 'Richard',
};

// user3.id = 56 throws error
```

## Difference between Types and Interface in TypeScript

- Modern Typescript types and interfaces are both very powerful.
- It is almost down to personal choice, these days.

### Key differences:

- The type alias can also be used for other types such as primitives,
  unions, and tuples.
- Unlike a type alias, an interface can be defined multiple times,
  and will be treated as a single interface

### Decision on when to use:

- Personally, I use the interface to make it clear that it
  is intended to be implemented and types for everything else.

```ts
// type
type Person = {
  name: string;
  age: number;
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
