import { ArrayService } from "./ArrayService.js";

console.log(ArrayService.accountsMerge([["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]));
console.log(ArrayService.accountsMerge([["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]));
console.log(ArrayService.accountsMerge([["Gabe","Gabe0@m.co","Gabe3@m.co"]]));

// expected outputs:
// [
//     ["John", "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"],
//     ["Mary", "mary@mail.com"],
//     ["John", "johnnybravo@mail.com"]
// ]

// [
//     ["Ethan", "Ethan0@m.co", "Ethan4@m.co", "Ethan5@m.co"],
//     ["Gabe", "Gabe0@m.co", "Gabe1@m.co", "Gabe3@m.co"],
//     ["Hanzo", "Hanzo0@m.co", "Hanzo1@m.co", "Hanzo3@m.co"],
//     ["Kevin", "Kevin0@m.co", "Kevin3@m.co", "Kevin5@m.co"],
//     ["Fern", "Fern0@m.co", "Fern1@m.co", "Fern5@m.co"]
// ]

// [
//     ["Gabe","Gabe0@m.co","Gabe3@m.co"]
// ]
//
// actual outputs:
// [
//     [ 'John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com' ],
//     [ 'Mary', 'mary@mail.com' ],
//     [ 'John', 'johnnybravo@mail.com' ]
// ]
// [
//     [ 'Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co' ],
//     [ 'Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co' ],
//     [ 'Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co' ],
//     [ 'Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co' ],
//     [ 'Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co' ]
// ]
// [
//     [ 'Gabe', 'Gabe0@m.co', 'Gabe3@m.co' ]
// ]