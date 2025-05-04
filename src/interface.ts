{
  //
  //** Type Interface */

  // Type alias
  type User = {
    name: string;
    age: number;
    isSignle: boolean;
  };

  type UserWithRoleOne = UserOne & { role: string };

  type rollNumber = number;

  interface UserWithRoleTwo extends User {
    role: string;
  }

  // Interface
  interface UserOne {
    name: string;
    age: number;
    isAdmited: boolean;
  }

  const userInfo: UserWithRoleOne = {
    name: "Sifat",
    age: 22,
    isAdmited: true,
    role: "Manager",
  };

  // const userInfo: User = {
  //   name: "Sifat",
  //   age: 22,
  //   isSignle: true,
  // };

  const userInfoTwo: UserOne = {
    name: "Sifat",
    age: 22,
    isAdmited: true,
  };

  //   console.log(userInfo);
  console.log(userInfoTwo);
  //
}
