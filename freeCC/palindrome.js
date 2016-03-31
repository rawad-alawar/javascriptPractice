function palindrome(str) {
  var string = str.toLowerCase().split(' ',',','.','!').join('');
  var reverse = string.split('').reverse().join('');
  if (string == reverse){
    return console.log(true)
  }
  else {
    return console.log(false);
  }
}




module.exports = palindrome;
