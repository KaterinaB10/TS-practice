type UserType = {
  firstName: string;
  lastName: string;
};

let user: UserType = {
  firstName: "Katia",
  lastName: "Bre",
};

type AdressType = {
  city: string;
  country: string;
};

let userAdress: AdressType = {
  city: "",
  country: "Norway",
};

let commonInfo: UserType & AdressType;

commonInfo = {
  ...user,
  ...userAdress,
};
