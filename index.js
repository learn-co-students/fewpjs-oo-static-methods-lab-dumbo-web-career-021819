class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    string = string.split(' ');
    return string.map(function(word) {
      if (word === string[0]) {
        return word.replace(word[0], word[0].toUpperCase());
      } else if (word != 'the' && word != 'a' && word != 'an' && word != 'but' && word != 'of' && word != 'and' && word != 'for' && word != 'at' && word != 'by' && word != 'from' && word) {
        return word.replace(word[0], word[0].toUpperCase());
    } else {
        return word
    }
      }).join(' ');
  }
}
