// src/data/codeArenaQuestions.js

const codeArenaQuestions = [
  {
    id: 1,
    title: "Print Even Numbers",
    question: "Print even numbers from 1 to 10.",
    hint: "Use i % 2 === 0",
    expectedOutput: "2\n4\n6\n8\n10",
  },
  {
    id: 2,
    title: "Reverse Loop",
    question: "Print numbers from 10 down to 1.",
    hint: "Use a loop with i--.",
    expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
  },
  {
    id: 3,
    title: "Skip Multiples of 3",
    question: "Print numbers from 1 to 20, skipping multiples of 3.",
    hint: "Use if (i % 3 !== 0)",
    expectedOutput: "1\n2\n4\n5\n7\n8\n10\n11\n13\n14\n16\n17\n19\n20",
  },
  {
    id: 4,
    title: "Sum of First 5 Numbers",
    question: "Print the sum of numbers from 1 to 5.",
    hint: "Use a sum variable and loop.",
    expectedOutput: "15",
  },
  {
    id: 5,
    title: "FizzBuzz (1 to 15)",
    question:
      "For numbers 1 to 15, print 'Fizz' for multiples of 3, 'Buzz' for 5, 'FizzBuzz' for both.",
    hint: "Use if-else with % operator.",
    expectedOutput:
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
  },
  {
    id: 6,
    title: "String Manipulation",
    question: "Print the length of the string 'JavaScript'.",
    hint: "Use .length property",
    expectedOutput: "10",
  },
  {
    id: 7,
    title: "Array Operations",
    question: "Print the first element of array [5, 10, 15, 20, 25].",
    hint: "Use array[0] to access first element",
    expectedOutput: "5",
  },
  {
    id: 8,
    title: "Mathematical Operations",
    question: "Print the result of 7 * 8 - 3.",
    hint: "Follow order of operations: multiplication first, then subtraction",
    expectedOutput: "53",
  },
  {
    id: 9,
    title: "Conditional Logic",
    question: "Print 'Adult' if age is 18 or above, otherwise print 'Minor'. Use age = 20.",
    hint: "Use if-else statement with age variable",
    expectedOutput: "Adult",
  },
  {
    id: 10,
    title: "Loop with Counter",
    question: "Print 'Hello' 3 times using a loop.",
    hint: "Use a for loop with counter",
    expectedOutput: "Hello\nHello\nHello",
  },
  {
    id: 11,
    title: "Number Pattern",
    question: "Print the pattern: 1, 3, 5, 7, 9 (first 5 odd numbers).",
    hint: "Use a loop and check for odd numbers with i % 2 !== 0",
    expectedOutput: "1\n3\n5\n7\n9",
  },
  {
    id: 12,
    title: "String Concatenation",
    question: "Print 'Hello' + ' ' + 'World'.",
    hint: "Use + operator to concatenate strings",
    expectedOutput: "Hello World",
  },
  {
    id: 13,
    title: "Array Sum",
    question: "Print the sum of array [2, 4, 6, 8, 10].",
    hint: "Use a loop to add all elements",
    expectedOutput: "30",
  },
  {
    id: 14,
    title: "Boolean Logic",
    question: "Print the result of (true && false) || true.",
    hint: "true && false = false, false || true = true",
    expectedOutput: "true",
  },
  {
    id: 15,
    title: "Function Call",
    question: "Create a function that returns 'Hello' and call it.",
    hint: "Define function and call it immediately",
    expectedOutput: "Hello",
  },
];

export default codeArenaQuestions;
