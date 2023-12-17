// read CodePath's explanation: https://guides.codepath.org/compsci/Crawler-Log-Folder
//
export class FolderService {
    static minOpRecursion(logs) {
        // we start at root
        let depth = 0;
        // call recursive function to walk through logs and update depth
        helper(logs, 0);
        // min ops to go back to root is depth
        return depth;
        function helper(logs, i) {
            // we have replayed all logs
            if (i > logs.length - 1) return;
            // if user went to parent folder
            if (logs[i] === '../') {
                // decrease depth if depth is not at root
                if (depth > 0) depth--;
            } else if (logs[i] === './') {
                // if user stayed in current folder, do nothing
                ;
            } else {
                // all other operations, user must have drilled down
                // so increase depth
                depth++;
            }
            // keep walking through logs until end of logs
            helper(logs, i + 1)
        }
    }

    static minOpsStack(logs) {
        let stack = [];
        for (const log of logs) {
            if (log === '../') {
                // if user move up to parent folder
                // pop from stack
                if (stack) stack.pop();
            } else if (log === './') {
                // if user stays in current folder, do nothing
                continue;
            } else {
                // all other operations, user must have drilled down
                stack.push(log);
            }
        }
        // depth is stack length
        return stack.length;
    }
}