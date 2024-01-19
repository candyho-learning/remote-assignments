/*
Assignment 1: Function and Array DONE
Complete the function below to find the max number of the passing array of numbers.
Reminder: you can't use built-in Math.max() or sort() to complete this assignment.
*/

function max(numbers) {
  let result = numbers[0];
  //validate input
  if (numbers.some((x) => isNaN(x))) {
    return "Please make sure all elements are numbers.";
  } else if (numbers.length === 0) {
    return []; //account for empty arrays
  } else {
    for (let i = 1; i < numbers.length; i++) {
      result = numbers[i] > result ? numbers[i] : result;
    }
  }
  return result;
}

/* 
Assignment 2: Function and Object DONE REVISIT UPDATED
Complete the function below to calculate the result of the passing object.
*/

function calculate({ n1, n2, op }) {
  //assuming both n1 & n2 are numbers
  const operators = "+-*/";
  if (!operators.includes(op)) return "Not Supported.";
  switch (op) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;
    case "*":
      return n1 * n2;
      break;
    case "/":
      return n1 / n2;
      break;
  }
}

/*
Assignment 3: Function, Array, and Object DONE REVISIT UPDATED
Complete the function below to calculate the total price of all products after applying a
discount.
*/
/*
const data1 = {
  discount: 0.5,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 200,
    },
  ],
};
*/

function calculate({ discount, products }) {
  let total = 0;
  //validate input, assuming discount & products.price are numbers
  //valid discount amount
  if (discount < 0 || discount > 1) return "Discount invalid.";
  if (products.length === 0) return "There are no products.";
  for (product of products) {
    total += product.price;
  }
  return total * (1 - discount);
}

// show the total price of all products after applying a discount

/* 
Assignment 5: Algorithm (Advanced Optional) DONE
Given an array of integers, return indices of the two numbers such that they add up to a
specific target. You may assume that each input would have exactly one solution, and you
may not use the same element twice.
*/

function twoSums(nums, target) {
  let current;
  let added;
  //loop through the array
  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    //nested loop to loop through numbers after the current one
    for (let j = i + 1; j < nums.length; j++) {
      added = nums[j];
      if (current + added === target) {
        return [i, j];
        break;
      }
    }
  }
  return "No matches.";
}
