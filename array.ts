//arrays with one type
let array: string[];
array = ["1", "2", "3"];

// array that can't be fixed
const number: ReadonlyArray<number> = [1, 2, 3];

// array with different types
type ArrayType = [string, number, null];
let newArray: ArrayType = ["one", 2, null];
