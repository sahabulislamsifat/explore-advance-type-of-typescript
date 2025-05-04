{
  //
  //** Type assertion */
  let anything: any;

  anything = "Next Level Web Development";
  anything = 2025;
  anything = true;

  //   console.log(anything);

  (anything as number).toFixed;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const resultOne = kgToGram(1000) as string;
  const resultTwo = kgToGram("2000") as number;

  //   console.log(resultOne);
  //   console.log(resultTwo);
  type CustomError = {
    message: string;
  };

  try {
    //////////
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
