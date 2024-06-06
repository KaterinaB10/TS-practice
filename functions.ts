//typization of the ordinary fuction
type ReturnUserName = {
  name: string;
};

function getUserName(name: string): ReturnUserName {
  return { name };
}
getUserName("UserName");

//typization of the array fuction
type TypeNewFuction = (name: string) => ReturnUserName;

const getNewUserName: TypeNewFuction = (name) => {
  return { name };
};

const getNum = (...numbers: number[]) => {
  return numbers;
};

//functional overloading
function getName(name: string): string;
function getName(name: string, age?: number): string;

function getName(name: string, age?: number): string {
  return age ? `Hi ${name}, who is ${age}` : `Hi ${name}`;
}

const name1 = getName("A");
const name2 = getName("B", 1);
// const name3 = getName("C", 2, 4);
