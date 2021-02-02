class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newSentance = []
    let words = str.split(" ")
    // newSentance.push(words[0].charAt(0).toUpperCase() + words[0].slice(1))
    words.forEach(function(word) {
      if (words[0] === word) { 
        newSentance.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
      else {
            if (exceptions.find(element => element === word)) {
              newSentance.push(word)
            } else {
              newSentance.push(word.charAt(0).toUpperCase() + word.slice(1)) 
            }
          }
          })
        return newSentance.join(" ")}
    }