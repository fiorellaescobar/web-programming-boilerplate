function longestString(srings) {
  let mayor = '';
  if (srings === undefined)
    throw new Error('You need to pass an array of strings!');

  for (const aString of srings) {
    if (!(typeof aString === 'string')) {
      throw new Error('You can only pass strings inside of the array!');
    }
    if (aString.length > mayor.length) mayor = aString;
  }

  return mayor;
}

module.exports = longestString;
