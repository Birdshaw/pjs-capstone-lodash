const _ = {
  clamp (number, lower, upper) {
    if (number >= lower && number <= upper) {
      return number;
    } else if(number < lower) {
      return lower;
    } else {
      return upper;
    }
  },

  inRange(number, start, end) {
    let newStart;
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      newStart = end;
      end = start;
      start = newStart;
    }
    if (number >= start && number < end) {
      return true;
    } else {
    return false;
  }
},

  words(string) {
    return stringArray = string.split(' ');
  },

  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length)/2);
    let endPaddingLength = (length - string.length - startPaddingLength);
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key) {
    if (object.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  },

  invert(object) {
    invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(object, predicate) {
    for (let key in object) {
      let returnedFunction = predicate(object[key]);
      if(returnedFunction != '') {
        return key;
      }
    }
   return undefined;
  },

  drop(array, number) {
    if (number !== undefined) {
      let removed = array.splice(0, number);
    } else if (number === undefined) {
      newNumber = 1;
      let removed = array.splice(0, newNumber);
    }
    return array;

  },

  dropWhile(array, predicate) {
  let droppedArray = [];
    array.forEach((element, index) => {
    if (!predicate(element, index)) {
      droppedArray = array.slice(index, array.length);
    }
  });
    return droppedArray;
},

  chunk (array, size = 1) {
   arrayChunks = [];
    for (let i = 0; i < array.length; i+=size) {
      arrayChunks.push(array.slice(i, i+size));
    }
    return arrayChunks;
  }
}

// Do not write or modify code below this line.
module.exports = _;
