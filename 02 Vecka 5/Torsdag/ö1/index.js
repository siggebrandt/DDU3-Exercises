/* function array_filter(targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    if (callback(element)) result.push(element);
  }
  return result;
}
*/

function array_filter(targetArray, callback) {
  let returnArray = [];
  for (let element of targetArray) {
    if (callback(element)) {
      returnArray.push(element);
    }
  }
  return returnArray;
}

function array_map(targetArray, callback) {
  let returnArray = [];
  for (let element of targetArray) {
    returnArray.push(callback(element));
  }
  return returnArray;
}

function array_find(targetArray, callback) {
  for (let element of targetArray) {
    if (callback(element)) {
      return element;
    }
  }
}

function array_findIndexOf(targetArray, callback) {
  for (let i = 0; i < targetArray.length; i++) {
    if (callback(targetArray[i])) {
      return i;
    }
    return -1;
  }
}

function array_some(targetArray, callback) {
  for (let element of targetArray) {
    if (callback(element)) {
      return true;
    }
  }
  return false;
}

function array_every(targetArray, callback) {
  for (let element of targetArray) {
    if (!callback(element)) {
      return false;
    }
  }
  return true;
}
