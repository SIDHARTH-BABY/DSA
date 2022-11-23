let arr = [1,33,4,55]


function bubblesort(arr){

    length = arr.length

    for(let i=0;i<length;i++){
        for(let j=0;j<length;j++){
            if(arr[j]>arr[j+1]){
                let temp =arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
bubblesort(arr)

console.log(arr);