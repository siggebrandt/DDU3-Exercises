arrayOfStrings = ["bil", "fil", "pil", "blomma", "gil", "mil"];
let arrayOfNumbers = [1, 5, 42, 42, 3]

function noReps(array1) {
    let array2 = [];
    for (let n of array1) {
        if (array2.includes(n)) { array2.push(n) }
    }
}

function mergeReps(array1, array2) {
    let returnArray = [];
    for (let n of array1) {
        if (!returnArray.includes(n)) { returnArray.push(n) }
    }
    for (let n of array2) {
        if (!returnArray.includes(n)) { returnArray.push(n) }
    }
    return returnArray;
}

function mergeReps2(arrayOfArrays) {
    let returnArray = [];
    for (let array of arrayOfArrays) {
        for (let n of array) {
            if (!returnArray.includes(n)) { returnArray.push(n) }
        }
    }
    return returnArray;
}



function wordMatcher(array, template) {
    let result = array.filter(function (string) {
        if (string.length !== template.length) { return false };
        for (let i = 0; i < string.length; i++) {
            if (template[i] != "*" && string[i] != template[i]) { return false };
        };
        return true;
    });
    return result;
}


function wordMatcher(array, template) {
    let result = array.filter(function (string) {
        for (let i = 0; i < string.length; i++) {

        }
        //animals.slice(2)
        if (string.length !== template.length) { return false };
        for (let i = 0; i < Math.max(string.length, template.length); i++) {
            if (template[i] != "*" && string[i] != template[i]) { return false }
        }
        return true;
    });
    return result;
}

console.log(wordMatcher(arrayOfStrings, "*il"));