function array_filter(targetArray, callback) {
  let result = [];
  for (let element of targetArray) {
    if (callback(element)) result.push(element);
  }
  return result;
}

function filterArray(targetArray, callback) {
  let result = [];
  result = targetArray.filter(callback);
  return result;
} 