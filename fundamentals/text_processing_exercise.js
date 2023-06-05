function replaceWord(words, template) {
  let wordsArr = words.split(', ');
  let templateArr = template.split(' ');
  let result = '';

  for (let i = 0; i < templateArr.length; i++) {
    if (templateArr[i].includes('*')) {
      for (let j = 0; j < wordsArr.length; j++) {
        if (templateArr[i].length === wordsArr[j].length) {
          result += wordsArr[j] + ' ';
        }
      }
    } else {
      result += templateArr[i] + ' ';
    }
  }
  console.log(result);
}
replaceWord('great, learning',
  'softuni is ***** place for ******** new programming languages');

function replaceHashtag(string) {
  const words = string.split(' ');

  words.forEach(word => {
    const isValidWord = word.startsWith('#') && words.length > 1;

    if (isValidWord) {
      let isLetter = true;
      let wordCopy = '';

      for (let index = 1; index < word.length; index++) {
        const char = word[index].toLowerCase();

        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
          isLetter = false;
          break;
        } else {
          wordCopy += word[index];
        }

      }
      if (isLetter) {
        console.log(wordCopy);
      }
    }
  });

}
replaceHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');

function extractFile(string) {
  const dirs = string.split('\\');
  const file = dirs.pop();

  const lastComa = file.lastIndexOf('.');
  const fileName = file.substring(0, lastComa);
  const extension = file.substring(lastComa + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')

function stringSubstring(word, text) {
  const tokens = text.split(' ');

  for (const token of tokens) {
    if (word.toLocaleLowerCase() === token.toLocaleLowerCase()) {
      return console.log(word);
    }
  }
  console.log(`${word} not found!`);
}
stringSubstring('javascript', 'JavaScript is the best programming language')

function replaceRepeatingChars(string) {
  let result = string[0];

  for (let index = 1; index < string.length; index++) {
    const current = string[index];
    const previous = string[index - 1];

    if (current !== previous) {
      result += current;
    }
  }
  console.log(result);
}
replaceHashtag('aaaaabbbbbcdddeeeedssaa')

function pascalCaseSplitter(string) {
  let result = string[0];
  let lower = string.toLowerCase();

  for (let index = 1; index < string.length; index++) {
    if (string[index] !== lower[index]) {
      result += ', '
    }
    result += string[index];

  }
  console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

function cutAndReverse(text) {
  const middle = text.length / 2;

  const firstPart = text.substring(0, middle).split('').reverse().join('');
  const secondPart = text.substring(middle).split('').reverse().join('');
  console.log(firstPart);
  console.log(secondPart);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')

function hardWords(array) {
  let words = array.pop();
  words.sort((a, b) => b.length - a.length);
  let newString = array.toString();
  let cutString = array.toString().split(' ');

  for (const word of words) {
    for (const hole of cutString) {
      if (hole.startsWith('_') && hole.endsWith('_')) {
        if (hole.length === word.length) {
          newString = newString.replace(hole, word);
        }
      }
      if (hole.startsWith('_') && !hole.endsWith('_')) {
        let newHole = hole.slice(0, hole.length - 1);
        if (newHole.length === word.length) {
          newString = newString.replace(newHole, word);
        }
      }
    }
  }
  console.log(newString);

}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])

function passwordGenerator(array) {
  let password = (array[0] + array[1]).toLocaleLowerCase();
  let key = array[2].toLocaleUpperCase();
  const vowelLetters = ['a', 'e', 'i', 'o', 'u'];

  let currentKeyIndex = 0;

  for (const char of password) {
    if (vowelLetters.includes(char)) {
      password = password.replace(char, key[currentKeyIndex++]);
      if (key[currentKeyIndex] === undefined) {
        currentKeyIndex = 0;
      }
    }
  }
  let finalPassword = password.split('').reverse().join('');
  console.log(`Your generated password is ${finalPassword}`);
}
passwordGenerator([
  'ilovepizza',
  'ihatevegetables',
  'orange'
])