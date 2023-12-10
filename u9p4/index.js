import { DynamicService } from "./dynamicService.js";

console.log('Iterative...');
console.log(DynamicService.generateTriangleIterative(5));
console.log(DynamicService.generateTriangleIterative(1));

console.log();

console.log('Recursive...');
DynamicService.printTriangleRecursion(5)
DynamicService.printTriangleRecursion(1)

