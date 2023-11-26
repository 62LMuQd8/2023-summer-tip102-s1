import { FolderService } from "./folderService.js";

console.log(FolderService.minOpRecursion(["d1/","d2/","../","d21/","./"]));
console.log(FolderService.minOpRecursion(["d1/","d2/","./","d3/","../","d31/"]));
console.log(FolderService.minOpRecursion(["d1/","../","../","../"]));
console.log();
console.log(FolderService.minOpsStack(["d1/","d2/","../","d21/","./"]));
console.log(FolderService.minOpsStack(["d1/","d2/","./","d3/","../","d31/"]));
console.log(FolderService.minOpsStack(["d1/","../","../","../"]));