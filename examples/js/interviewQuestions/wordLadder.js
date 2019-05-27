/*
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
 */

const Utils = require("../utils");

function wordLadder (firstWord, targetWord, words) {
  let active = [{ word: firstWord, depth: 1 }];
  let visited = [firstWord];

  while (active.length) {
    let curr = active.shift();

    if (curr.word === targetWord) {
      return curr.depth;
    }

    words.forEach((word) => {
      if (isSimilar(word, curr.word) && !visited.includes(word)) {
        active.push({ word: word, depth: curr.depth + 1 });
      }
    });
  };

  function isSimilar (A, B) {
    let diff = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        diff++;
      }
    }
    return diff === 1;
  }
};

let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
Utils.assert(wordLadder("hit", "cog", wordList) === 5, "Result is 5");
