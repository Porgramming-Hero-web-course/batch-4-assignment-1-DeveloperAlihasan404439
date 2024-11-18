const sameFunction = (array: number[]): number => {
  let total: number = 0;
  for (const single of array) {
    total += single;
  }
  return total;
};

const removeDuplicates = (array: number[]): number[] => {
  const newArray: number[] = [];

  for (let single of array) {
    if (!newArray.includes(single)) {
      newArray.push(single);
    }
  }
  return newArray;
};


const countWordOccurrences = (first: string, screen: string): number => {
  const firstLowerCase = first.toLocaleLowerCase();
  const screenLowerCase = screen.toLocaleLowerCase();

  const word = firstLowerCase.split(" ").filter((w: string) => w === screenLowerCase)?.length;
  return word
};

// Define the Circle and Rectangle types
type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

// Union type
type Shape = Circle | Rectangle;

// Function to calculate area using type guards
function calculateShapeArea(shape: Shape): number {
  if (shape.shape === "circle") {
    return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  } else {
    throw new Error("Unsupported shape type");
  }
}
