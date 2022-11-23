 let arr =[2,1,3,4,11,99,22]


 function insertion(arr){
length=arr.length

for(i=0;i<length;i++){
    if(arr[i]<arr[0]){
        arr.unshift(arr.splice(i,0),[0])
    }else{
        for(let j=1;j<i;j++){
            if(arr[i]>arr[j-1] && arr[i]<arr[j])
            {
                arr.splice(j,0,arr.splice(i,1)[0])
            }


        }
    }
}
 }






 insertion(arr)
 console.log(arr);