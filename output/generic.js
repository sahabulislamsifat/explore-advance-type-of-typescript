"use strict";
{
    //   const rollNumber: number[] = [3, 5, 6, 8, 9];
    //   const rollNumber: Array<number> = [3, 5, 6, 8, 9];
    const rollNumber = [3, 5, 6, 8, 9];
    // const rollNumber: GenericArray = [3, 5, 6, 8, 9];
    //   const stringArray: string[] = ["Mr. Sifat", "Mr Sajul", "Mr Ayan"];
    // const stringArray: Array<string> = ["Mr. Sifat", "Mr Sajul", "Mr Ayan"];
    const stringArray = [
        "Mr. Sifat",
        "Mr Sajul",
        "Mr Ayan",
    ];
    //   const stringArray: GenericArray = ["Mr. Sifat", "Mr Sajul", "Mr Ayan"];
    //   const booleanArray: boolean[] = [true, false, true];
    // const booleanArray: GenericArray = [true, false, true];
    const booleanArray = [true, false, true];
    // Array of Object
    const user = [
        {
            name: "Sifat",
            age: 22,
        },
        {
            name: "Sajul",
            age: 26,
        },
    ];
    const add = (x, y) => {
        return x + y;
    };
    add(55, 66);
    const userTuple = ["Mr X", "Mr Y"];
    const userWithId = [
        1234,
        { name: "Sifat", email: "sahabulislamsifat@gmail.com" },
    ];
    console.log(userWithId);
}
