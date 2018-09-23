// All Hebrew letters
var letters = {
 'א': 1,
 'ב': 2,
 'ג': 3,
 'ד': 4,
 'ה': 5,
 'ו': 6,
 'ז': 7,
 'ח': 8,
 'ט': 9,
 'י': 10,
 'כ': 11,
 'ל': 12,
 'מ': 13,
 'נ': 14,
 'ס': 15,
 'ע': 16,
 'פ': 17,
 'צ': 18,
 'ק': 19,
 'ר': 20,
 'ש': 21,
 'ת': 22,
 'ם': 13,
 'ן': 14,
 'ך': 11,
 'ף': 17,
 'צ': 18
};

var wordsIndInDic = '_';

var dic = {};

function createDic(data) {
  data.forEach((word) => {
     let filteredWord = word
       .split('') // Split to letters
       .filter(letter => letters[letter]); // Get only supported letters
       
          // Not finished
          let inDic;
          let len = filteredWord.length;
          filteredWord.forEach((letter, i) => {
             if(i === 0) {
               inDic = dic[letter];
          if(!inDic) {
            dic[filteredWord[0]] = {};
            inDic = dic[filteredWord[0]]
          }
             } else if(i + 1 === len) { 
                inDic[wordsIndInDic] = letter;
             } else if(!inDic[letter]) {
                inDic[letter] = {};
                inDic = inDic[letter];
             }
          });
  });
}
