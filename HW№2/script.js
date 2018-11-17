function doWithArray(array, key) {
    tmp = array[0];
    switch (key) {
        case 'max':
            for (var i in array) {
                if (array[i] > tmp) tmp = array[i];
            }
            break;
        case 'min':
            for (var i in array) {
                if (array[i] < tmp) tmp = array[i];
            }
            break;
        case 'sum':
            tmp = 0;
            for (var i in array) {
                if (typeof array[i] == "undefined" || isNaN(array[i])) {  //if number is undefined or has type NaN - skip iteration
                    continue;
                }
                tmp += array[i];
            }
            break;
    }

    return tmp;
}


console.log(doWithArray([1, undefined, NaN, 5, -2,0],'max'));