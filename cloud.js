// const body = document.body;

// selecting all paraghraphs
const wordNodes = document.querySelectorAll('p'); // returns array of sentences
// turn sentences into array of words
// turn array of array of words into array of words

const arrOfSentences = [];
const thingsToIgnore = [
  'the',
  'of',
  'a',
  'and',
  'in',
  'by',
  'with',
  'to',
  'as',
  'is',
  'that',
  'or',
  'it',
];

// put words into array
wordNodes.forEach((e) =>
  arrOfSentences.push(e.innerText.replace(/[^A-Z0-9 ]/gi, '').toLowerCase())
);
const arrOfWords = arrOfSentences.map((e) => e.split(' '));
const arrOfWords2 = arrOfWords.flat(Infinity);
const filteredWords = arrOfWords2.filter((e) => {
  return !thingsToIgnore.includes(e);
});

// put words into map with counters
const wordMap = new Map();
filteredWords.forEach((word) => {
  wordMap.set(word, wordMap.get(word) + 1 || 1);
});

// generate word cloud
// use keys as innertext
// use values as font-size

// function generateWord(key, value) {
//     const word = document.createElement('p');
//     word.setAttribute('class', `${key}string`)
//     word.innerText = key;
//     word.
// }
const wordCloudDiv = document.createElement('div');
wordCloudDiv.setAttribute('class', 'wordCloud');
wordCloudDiv.style.display = 'flex';
wordCloudDiv.style.flexFlow = 'row wrap';

document.querySelector('body').innerHTML = '';
for (let [key, value] of wordMap) {
  if (value >= 4) {
    const word = document.createElement('p');
    word.setAttribute('class', `${key}classname`);
    word.innerHTML = '&#160;' + key;
    word.style.fontSize = `1px`;
    wordCloudDiv.appendChild(word);
    word.style.transitionProperty = 'font-size';
    word.style.transitionDelay = '250ms';
    word.style.transitionDuration = '4s';

    setTimeout(() => {
      word.style.fontSize = `${Math.ceil(value / 4)}em`;
      return;
    });
  }
}

// for (let [key, value] of wordMap) {
//   if (value >= 2) {
//     const word = document.querySelector(`.${key}classname`);
//     console.log(word);
//     word.style.fontSize = `${Math.ceil(value / 3)}em`;
//   }
// }

document.querySelector('body').appendChild(wordCloudDiv);

console.log(wordMap);
