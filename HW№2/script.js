function doWithArray(array, key) {
    tmp = array[0];
    switch (key) {
        case 'max':
            for (var i in array) {
                if (array[i] > tmp) tmp = array[i];
            }
            return tmp;
        case 'min':
            for (var i in array) {
                if (array[i] < tmp) tmp = array[i];
            }
            return tmp;
        case 'sum':
            tmp = 0;
            for (var i in array) {
                tmp += array[i];
            }
            return tmp;
    }
}
