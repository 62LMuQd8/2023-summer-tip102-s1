import { ArrayService } from './arrayService.js';

console.log(ArrayService.merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(ArrayService.merge([1], 1, [], 0));
console.log(ArrayService.merge([0], 0, [1], 1));