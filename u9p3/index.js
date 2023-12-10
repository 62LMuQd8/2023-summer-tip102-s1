import { DynamicService } from "./dynamicService.js";

console.log('Using memoization...');
console.log(DynamicService.maxProfitRecursion([7,1,5,3,6,4]));
console.log(DynamicService.maxProfitRecursion([7,6,4,3,1]));
console.log(DynamicService.maxProfitRecursion([7,2,10,4,1,6]));

console.log();

console.log('Using tabulation...');
console.log(DynamicService.maxProfitIterativeOptimized([7,1,5,3,6,4]));
console.log(DynamicService.maxProfitIterativeOptimized([7,6,4,3,1]));
console.log(DynamicService.maxProfitIterativeOptimized([7,2,10,4,1,6]));