{
  //** Function with Generic */
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resultOne = createArray("Bangladesh");
  //   const resultTwo = createArrayWithGeneric<boolean>(true);
  //   const resultTwo = createArrayWithGeneric<boolean>(true);

  const resultGeneric = createArrayWithGeneric<string>("Rangpur");

  type User = {
    name: string;
    age: number;
  };

  const resultGenericObject = createArrayWithGeneric<User>({
    name: "Sifat",
    age: 22,
  });

  const createArrayWithTuple = <T, U>(paramOne: T, paramTwo: U): [T, U] => {
    return [paramOne, paramTwo];
  };

  //   const resultTen = createArray("Bangladesh", 'Rangpur');
  //   const resultTwo = createArrayWithGeneric<boolean>(true);
  //   const resultTwo = createArrayWithGeneric<boolean>(true);

  const resultTuple = createArrayWithTuple<string, number>("Rangpur", 2025);

  const resultTuple1 = createArrayWithTuple<string, { name: string }>(
    "Rangpur",
    {
      name: "Sifat",
    }
  );

  //   type User = {
  //     name: string;
  //     age: number;
  //   };

  //   const resultGenericObject = createArrayWithGeneric<User>({
  //     name: "Sifat",
  //     age: 22,
  //   });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
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
