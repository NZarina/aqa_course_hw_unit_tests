/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if(typeof word !== "string") {
    return false;
  }
  let wordToCheck = word.toLowerCase();
  for (let i = 0; i < wordToCheck.length / 2; i++) {
      if(wordToCheck[i] !== wordToCheck[wordToCheck.length - i - 1]) {
          return false;
      } 
  }
  return true;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {

  if (typeof sentence !== 'string') {
    return []; 
  }

  if (sentence == '') {
    return []; 
  }

  const words = sentence.split(" "); // разбиваем sentence на массив слов, используя пробел в качестве разделителя
  let longestWord = "";
  const longestWordsArr = [];
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
      longestWordsArr.length = 0; // обнуление массива
      longestWordsArr.push(word);
    } else if (longestWord.length === word.length) {
      longestWordsArr.push(word);
    }
  }
  return longestWordsArr;
}

export { isPalindrom, findLongestWords };
