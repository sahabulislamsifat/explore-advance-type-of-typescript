{
  //** Constraints */

    const addCourseToStudent = <T>(student: T extends { id: number, name: string, email: string}) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };
  const studentOne = addCourseToStudent({
    id: 2025,
    name: "Mr X",
    email: "a@gmail.com",
    devType: "Next Level Web Developer",
  });
  const studentTwo = addCourseToStudent<{
    name: string;
    email: string;
    hasWatch: string;
  }>({
    name: "Mr John",
    email: "mr@gmail.com",
    hasWatch: "Apple Watch",
  });
}
