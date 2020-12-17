//given vowels
const VOWELS = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"];

//extract part of the string to replace
const stringToReplace = (word) => {
  let vowelPosition = 0;
  const chars = [...word];
  for (let i = 0; i < chars.length; i++) {
    const validVowel = VOWELS.includes(chars[i].toLowerCase());
    if (validVowel) {
      vowelPosition = i + 1;
    }
    if (vowelPosition && !validVowel) {
      break;
    }
  }
  return word.slice(0, vowelPosition);
}

//formate string
const stringFormatter = (input) => {
  const words = (input || '').split(' ');

  if (words.length <=1) return input;
  const allButSpaces = words.filter(word=>word.replace(/  +/g, '').length > 0),
    len = allButSpaces.length,
    validPairs = allButSpaces.slice(0,len -len%2),
    wordReplacements = {};
  
   for(let i =0; i<validPairs.length;i++){
    let val = validPairs[i]
    if(i%2===0) {
      wordReplacements[val] = val.replace(stringToReplace(val),stringToReplace(validPairs[i+1]))
    }else{
    wordReplacements[val] = val.replace(stringToReplace(val),stringToReplace(validPairs[i-1]))
    }
  }
  return words.map(word => {
    if(!!wordReplacements[word]) return wordReplacements[word]
     return word
  }).join(' ');
};

module.exports = {
  stringFormatter,
 
};


