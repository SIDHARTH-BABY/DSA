
const numbers = [44, 55, 666, 1, 2, 3, 49, 26]


function bubblesort(arr) {
    const length = arr.length

    for (let i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        
        }
        
    }

}

bubblesort(numbers)

console.log(numbers);

