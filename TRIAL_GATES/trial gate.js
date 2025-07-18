/*Complete the method/function so that it converts dash delimited words into camel casing. 

The first word within the output should be capitalized only if the original word was capitalzed (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

```js
`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
```*/

const camelCase = (string) => {
  const words = string.split("-");
  let results = words[0];
  for (let i = 1; i < words.length; i++) {
    results += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return results;
};
console.log(camelCase("the-stealth-warrior"));

// const nul = null;
console.log(typeof null);
