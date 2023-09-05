import { Data } from "../data/data";

export type ClassType = {
    [key: number]: number[]
}


// o(n) s(n)
export const getMean = (arr: number[]) => {
    const res = arr.reduce((curr, acc) => curr + acc, 0) / arr.length
    return Number(Number(res).toFixed(3));
}

// o(n) s(n)
export const getMode = (arr: number[]) => {
    let object: { [key: number]: number } = {}

    // updating frequency of elements
    for (let i = 0; i < arr.length; i++) {
        if (object[arr[i]]) {
            object[arr[i]] += 1
        } else {
            object[arr[i]] = 1
        }
    }
    let biggestValue = -1
    let biggestValuesKey = -1

    // finding biggest value
    Object.keys(object).forEach(key => {
        const newKey = +key
        let value = object[newKey]
        if (value > biggestValue) {
            biggestValue = value
            biggestValuesKey = newKey
        }
    })

    return Number(Number(biggestValuesKey).toFixed(3));

}

// o(n) s(n)
export const getMedian = (arr: number[]) => {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const length = sortedArr.length;
    let res
    if (length % 2 === 1) {
        // If length is odd
        res = sortedArr[(length / 2) - .5]
    }
    else {
        res = (sortedArr[length / 2]
            + sortedArr[(length / 2) - 1]) / 2;
    }
    // round off if required
    return Number(Number(res).toFixed(3));
}

// o(n) s(n)
export const getArraysForClasses = (data: Data[], key: keyof Data) => {
    // it will gives object where value willbe array of the desired property
    const classesObj: ClassType = {}
    for (let item of data) {
        if (classesObj.hasOwnProperty(item.Alcohol)) {
            classesObj[item.Alcohol]?.push(+item[key])
        } else {
            classesObj[item.Alcohol] = [+item[key]]
        }
    }
    return classesObj
}