function solution(string) {
    let i = 0
    string = string.split('')
    while(i < string.length){
      if (string[i].toUpperCase() == string[i])
        {
          string.splice(i, 0, ' ')
          ++i
        }
      ++i
    }
    return string.join('')
  }