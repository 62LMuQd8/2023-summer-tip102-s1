export class ArrayService {
    // read CodePath's explanation: https://guides.codepath.org/compsci/Accounts-Merge
    static accountsMerge(accounts) {
        // holds the aggregated merged accounts
        let result = [];
        // create an adjacency list
        let adj = buildAdjacencyList();
        // keep track of visited email nodes
        // note: duplicates in the input accounts array
        // are removed when we build a graph from the emails in the accounts
        let visited = new Set();

        // for each account
        for (const account of accounts) {
            // if the emails in current account have not already been merged in another account,
            // note: which node we start at is arbitrary, for convenience of programming
            // we start with the first email (node) in the account
            if (!visited.has(account[1])) {
                let mergedAccount = [];
                // then traverse the graph to get all emails for account
                dfs(mergedAccount, account[1]);
                // sort emails for account
                mergedAccount.sort();
                // aggregate merged account
                result.push([account[0], ...mergedAccount]);
            }
        }

        return result;

        function dfs(mergedAccount, emailNode) {
            // if we have visited current node, return back
            if (visited.has(emailNode)) return;

            // record email node as visited
            visited.add(emailNode);
            // add email to merged account
            mergedAccount.push(emailNode);

            // traverse all adjacent nodes from current node
            let neighbor = adj.get(emailNode);
            for (const nextEmailNode of neighbor ? neighbor : []) {
                dfs(mergedAccount, nextEmailNode);
            }
        }

        function buildAdjacencyList() {
            let adj = new Map();
            // for each account
            for (const account of accounts) {

                // start with an email (a node on the graph)
                // this can be any node in the account
                // for ease of programming, we will take the first email
                // (as the starting node in the graph)
                let initialEmailNode = account[1];

                // then for the remaining nodes in the account
                for (let i = 2; i < account.length; i++) {
                    let nextEmailNode = account[i];

                    // record that there is an edge from the starting node to the current node
                    if (!adj.has(initialEmailNode)) adj.set(initialEmailNode, []);
                    adj.get(initialEmailNode).push(nextEmailNode);

                    // and record that there is an edge from current node to starting node
                    if (!adj.has(nextEmailNode)) adj.set(nextEmailNode, []);
                    adj.get(nextEmailNode).push(initialEmailNode);
                }
            }
            // return adjacency list
            return adj;
        }
    }
}