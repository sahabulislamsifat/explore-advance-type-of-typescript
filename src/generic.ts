{
  //** Generic Type */

  //   type GenericArray = Array<number>;
  //   type GenericArray = Array<string>;
  //   type GenericArray = Array<boolean>;
  //   type GenericArray<param> = Array<param>;
  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [3, 5, 6, 8, 9];
  //   const rollNumber: Array<number> = [3, 5, 6, 8, 9];
  const rollNumber: GenericArray<number> = [3, 5, 6, 8, 9];
  // const rollNumber: GenericArray = [3, 5, 6, 8, 9];
  //   const stringArray: string[] = ["Mr. Sifat", "Mr Sajul", "Mr Ayan"];
  // const stringArray: Array<string> = ["Mr. Sifat", "Mr Sajul", "Mr Ayan"];
  const stringArray: GenericArray<string> = [
    "Mr. Sifat",
    "Mr Sajul",
    "Mr Ayan",
  ];
  //   const stringArray: GenericArray = ["Mr. Sifat", "Mr Sajul", "Mr Ayan"];
  //   const booleanArray: boolean[] = [true, false, true];
  // const booleanArray: GenericArray = [true, false, true];
  const booleanArray: GenericArray<boolean> = [true, false, true];

  // Array of Object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Sifat",
      age: 22,
    },
    {
      name: "Sajul",
      age: 26,
    },
  ];

  const add = (x: number, y: number) => {
    return x + y;
  };

  add(55, 66);

  // ** Generic Tuple
  type GenericTuple<X, Y> = [X, Y];

  const userTuple: GenericTuple<string, string> = ["Mr X", "Mr Y"];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Sifat", email: "sahabulislamsifat@gmail.com" },
  ];

  console.log(userWithId);
}
