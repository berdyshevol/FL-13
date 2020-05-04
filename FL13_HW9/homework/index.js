'use strict';

// Task 1
const convert = (...arr) => {
    const convertType = value => {
        if (typeof value === 'string') {
            return parseInt(value);
        } else if (typeof value === 'number') {
            return value.toString();
        } else {
            return value;
        }
    }
    const returnArr = [];
    for (const value of arr) {
        returnArr.push(convertType(value));
    }
    return returnArr;
}

// Task 2
const executeforEach = (arr, callback) => {
    for (const value of arr) {
        callback(value);
    }
};

// Task 3
const mapArray = (arr, callback) => {
    const resultArr = [];
    const convertToNumber = x => +x;
    const pushToResultArray = x => resultArr.push(callback(convertToNumber(x)));
    executeforEach(arr, pushToResultArray);
    return resultArr;
};

// Task 4
const filterArray = (arr, callback) => {
    const resultArr = [];
    const filterOutArray = value => {
        if (callback(value)) {
            resultArr.push(value);
        }
    };
    executeforEach(arr, filterOutArray);
    return resultArr;
};

// Task 5
const containsValue = (arr, value) => {
    let result = false;
    const any = x => {
        if (x === value) {
            result = true;
        }
    };
    executeforEach(arr, any);
    return result;
};

// Task 6
const flipOver = str => {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }
    return newString;
};

// Task 7
const makeListFromRange = arr => {
    let [from, to] = arr;
    if (from > to) {
        [from, to] = [to, from];
    }
    const resultArray = [];

    for (let i = from; i <= to; i++) {
        resultArray.push(i);
    }
    return resultArray;
};

// Task 8
const getArrayOfKeys = (array, key) => {
    let resultArr = [];
    for (const obj of array) {
        if (obj[key]) {
            resultArr.push(obj[key]);
        }
    }
    return resultArr;
};

// Task 9
const substitute = arr => {
    const minNumber = 10;
    const maxNumber = 20;
    const resultArray = [];
    const isInRange = x => minNumber < x && x < maxNumber;
    const substituteItem = value => resultArray.push(
                                       isInRange(value) ? '*' : value
                                    );
    mapArray(arr, substituteItem);
    return resultArray;
};

// Task 10
const getPastDay = (date, days) => {
    const millisecondsInADay = 86400000;
    return new Date(date.getTime() - millisecondsInADay * days).getDate();
};

// Task 11
const formatDate = (date) => {
    const maxDigit = 9;
    const formatted = number => number <= maxDigit ? '0' + number : number.toString();
    return `${date.getFullYear()}/${formatted(date.getMonth() + 1)}/${formatted(date.getDate())}` +
    ` ${formatted(date.getHours())}:${formatted(date.getMinutes())}`;
};

