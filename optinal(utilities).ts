interface IRoom {
  review: "string";
  stars: number;
  squere: number;
}

// with Omit we extends with all params of interface except selected ones
interface IRoomCreate extends Omit<IRoom, "squere"> {}

// with Pick we can use just selected parameter of interface
interface IRoomSquere extends Pick<IRoom, "squere"> {}

// with Partial all parameters of interface are not obligatorisk
interface IRoomPartial extends Partial<IRoom> {}
