let arr = [44,55,66,2,3,4,5,66,6,9]

function selection(arr){
const length = arr.length
 for(let i=0;i<length;i++){
    let min = i
    let temp = arr[i]
    for(let j=i+1;j<length;j++){
        if(arr[min]>arr[j]){
            min =j
        }

    }
    arr[i]=arr[min]
    arr[min] = temp


 }
}

selection(arr)

console.log(arr);