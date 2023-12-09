import { DynamicService } from "./dynamicService.js";

console.log('Using memoization...');
console.log(DynamicService.minCostRecursion([10,15,20]));
console.log(DynamicService.minCostRecursion([1,100,1,1,1,100,1,1,100,1]));

console.log();

console.log('Using tabulation...');
console.log(DynamicService.minCostIterative([10,15,20]));
console.log(DynamicService.minCostIterative([1,100,1,1,1,100,1,1,100,1]));