/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  set1 = {}
  for (let i = 0; i<str1.length; i++){
    if (set1[str1[i]]){
      set1[str1[i]] += 1;
    }else{
      set1[str1[i]] = 1;
    }
  }
  for (let i = 0; i<str2.length; i++){
    if (set1[str2[i]]){
      set1[str2[i]] -= 1;
    }else{
      return false;
    }
  }
  for (let key in set1){
    if (set1[key] !== 0){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
