function calculateCapacity(array) {
    let sumOfCapacity = 0;

    walksAnArray:
        for (let i = 1; i < array.length; i++) {
            if (array[i-1] > array[i]) {
                let tmpCapacity = 0;
                for (let j = i; j < array.length; j++) {
                    if (array[i-1] > array[j]) {
                        tmpCapacity += array[i-1] - array[j];
                    } else {
                        sumOfCapacity += tmpCapacity;
                        i = j;
                        break;
                    }
                    if (j+1 == array.length) {
                        sumOfCapacity += calculateCapacity(array.slice(i-1).reverse());
                        break walksAnArray;
                    }
                }
            }
        }

    return sumOfCapacity;
}