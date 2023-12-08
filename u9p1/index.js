import { DynamicService } from "./dynamicService.js";

console.log('Using memoization...');
console.log(DynamicService.fibonacciNumberRecursion(2));
console.log(DynamicService.fibonacciNumberRecursion(3));
console.log(DynamicService.fibonacciNumberRecursion(4));
console.log(DynamicService.fibonacciNumberRecursion(0));
console.log(DynamicService.fibonacciNumberRecursion(47));

console.log();

console.log('Using tabulation...');
console.log(DynamicService.fibonacciNumberIterative(2));
console.log(DynamicService.fibonacciNumberIterative(3));
console.log(DynamicService.fibonacciNumberIterative(4));
console.log(DynamicService.fibonacciNumberIterative(0));
console.log(DynamicService.fibonacciNumberIterative(47));