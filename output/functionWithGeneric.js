"use strict";
{
    //** Function with Generic */
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resultOne = createArray("Bangladesh");
    //   const resultTwo = createArrayWithGeneric<boolean>(true);
    //   const resultTwo = createArrayWithGeneric<boolean>(true);
    const resultGeneric = createArrayWithGeneric("Rangpur");
    const resultGenericObject = createArrayWithGeneric({
        name: "Sifat",
        age: 22,
    });
    const createArrayWithTuple = (paramOne, paramTwo) => {
        return [paramOne, paramTwo];
    };
    //   const resultTen = createArray("Bangladesh", 'Rangpur');
    //   const resultTwo = createArrayWithGeneric<boolean>(true);
    //   const resultTwo = createArrayWithGeneric<boolean>(true);
    const resultTuple = createArrayWithTuple("Rangpur", 2025);
    const resultTuple1 = createArrayWithTuple("Rangpur", {
        name: "Sifat",
    });
    //   type User = {
    //     name: string;
    //     age: number;
    //   };
    //   const resultGenericObject = createArrayWithGeneric<User>({
    //     name: "Sifat",
    //     age: 22,
    //   });
    const addCourseToStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const studentOne = addCourseToStudent({
        name: "Mr X",
        email: "a@gmail.com",
        devType: "Next Level Web Developer",
    });
    const studentTwo = addCourseToStudent({
        name: "Mr John",
        email: "mr@gmail.com",
        hasWatch: "Apple Watch",
    });
}
