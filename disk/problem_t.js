"use strict";
const sameFunction = (array) => {
    let total = 0;
    for (const single of array) {
        total += single;
    }
    return total;
};
const removeDuplicates = (array) => {
    const newArray = [];
    for (let single of array) {
        if (!newArray.includes(single)) {
            newArray.push(single);
        }
    }
    return newArray;
};
const countWordOccurrences = (first, screen) => {
    var _a;
    const firstLowerCase = first.toLocaleLowerCase();
    const screenLowerCase = screen.toLocaleLowerCase();
    const word = (_a = firstLowerCase.split(" ").filter((w) => w === screenLowerCase)) === null || _a === void 0 ? void 0 : _a.length;
    return word;
};
// Function to calculate area using type guards
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        throw new Error("Unsupported shape type");
    }
}
// Sample Usage
// Circle
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // 78.54
// Rectangle
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); // 24
