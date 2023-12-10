import { DynamicService } from "./dynamicService.js";

console.log('Iterative...');
console.log(DynamicService.generateTriangleIterative(3));
console.log(DynamicService.generateTriangleIterative(0));
console.log(DynamicService.generateTriangleIterative(1));

console.log();

console.log('Recursive...');
console.log(DynamicService.generateTriangleRecursion(3));
console.log(DynamicService.generateTriangleRecursion(0));
console.log(DynamicService.generateTriangleRecursion(1));

