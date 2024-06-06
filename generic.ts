// We use it when we don't know which type will be parameters
function functionName<T>(parameters: T): T {
  return parameters;
}

functionName<string>("this is string");
functionName<number>(3);

const functionArrow = <T>(parameters: T): T => {
  return parameters;
};

// Generic with interface and const
interface IType<T, X> {
  value1: T;
  value2: X;
}

const item1: IType<string, number> = {
  value1: "this is string",
  value2: 2,
};

const item2: IType<number, number> = {
  value1: 3,
  value2: 2,
};

// Generic with interface and functions
type Length = {
  length: number;
};

function getNameLength<T extends Length>(something: T): number {
  return something.length;
}

getNameLength("khljkø");
getNameLength([1, 2, 3]);
