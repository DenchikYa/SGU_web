let ignore = ["?", "!", ":", ";" ,",", ".", "-", " ", "\t", "\r"];
let rmChars = [];

function handler() {
    let req = document.getElementById('req');
    let res = document.getElementById('res');

    res.value = removeWords(req.value);
}

function removeWords(str) {
  let words = str.split(" ");

  words.forEach((word) => {
    let rmWordChars = word.split('').filter((item, pos, self) => {
      return (self.indexOf(item) !== self.lastIndexOf(item) && pos === self.indexOf(item)&& ignore.indexOf(item) === -1 && rmChars.indexOf(item) === -1)
      });
    rmChars = rmChars.concat(rmWordChars);
  });

  rmChars.forEach((rmChar) => {
    str = str.replace(new RegExp(rmChar, "g"), '');
  });

  return str;
};