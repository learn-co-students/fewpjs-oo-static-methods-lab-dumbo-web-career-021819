class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  };
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9'-\s]*/g, '')
  }
  static titleize(string) {
    string = Formatter.capitalize(string);
    const wordsArray = string.split(' ');
    return wordsArray.map(word => {
      const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      if (exceptions.includes(word)){
        return word
      }else{
        return Formatter.capitalize(word)
      }
    }).join(" ")
  }
}