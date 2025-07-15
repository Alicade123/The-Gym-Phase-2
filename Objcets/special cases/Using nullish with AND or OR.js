let x = 1 + 2 ?? 3;
console.log(x);

//It’s forbidden to use it with || or && without explicit parentheses.

let xAND = (1 && 2) ?? 3; // without parenthese will lead to syntax error :
//  Due to safety reasons, JavaScript forbids using ?? together with && and || operators
