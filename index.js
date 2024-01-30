// 1 Задача
  function getSum(a, b) {
    return a + b;
  }
  module.exports = getSum;
console.log(getSum(3, 5));
console.log(getSum(5, -5));

// 2 Задача
  function getSmallestNumber(a, b) {
    return Math.min(a, b);
  }
  module.exports = getSmallestNumber;
console.log(getSmallestNumber(110, 120));
console.log(getSmallestNumber(1, -1));

// 3 Задача
  function castBoolean(value) {
    return Boolean(value);
  }
  module.exports = castBoolean;
console.log(castBoolean(0));
console.log(castBoolean('Hexlet'));
console.log(castBoolean(NaN));
console.log(castBoolean());
console.log(castBoolean(''));
console.log(castBoolean(() => { }));
console.log(castBoolean(122343n));
console.log(castBoolean(console.log));
console.log(castBoolean(console.log()));

// 4 Задача
  function capitalize(text, i) {
  if (i < 0 || i >= text.length) {
      return text;
  }
  return text.slice(0, i) + text[i].toUpperCase() + text.slice(i + 1);
  }
  module.exports = capitalize;
console.log(capitalize('Hexlet', 2));
console.log(capitalize('Hello, world!', 22));
console.log(capitalize('What`s up!', -22));
console.log(capitalize('Hello', 0));

// 5 Задача
  function countCapitalLetters(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase() && text[i] !== ' ') {
          count++;
      }
  }
  return count;
  }
  module.exports = countCapitalLetters;
console.log(countCapitalLetters('HeXlet'));
console.log(countCapitalLetters(''));
console.log(countCapitalLetters('Привет'));
console.log(countCapitalLetters('hello world'));
console.log(countCapitalLetters('WELCOME TO THE WORLD OF CAPITAL LETTERS'));
