"use strict";
{
    //
    //** Type assertion */
    let anything;
    anything = "Next Level Web Development";
    anything = 2025;
    anything = true;
    //   console.log(anything);
    anything.toFixed;
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted value is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const resultOne = kgToGram(1000);
    const resultTwo = kgToGram("2000");
    try {
        //////////
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
