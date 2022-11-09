
// const a = [2,8, 2, 3, 3, 4, 5]


// for (i = 0; i < a.length-1; i++) {
//     for (j = i + 1; j < a.length; j++) {
//         if (a[i] + a[j] == 10) {

//             console.log(a[i], a[j], 'Answer');

//         }
//     }
    
// }




// function addArray(){
//     const a = [2,8, 2, 3]
//  let total =0
//  for(let i = 0; i < a.length; i++){
//     total += a[i]
//  }
//  return total
// }

// console.log(addArray());




//  const addArray=()=>{
//     const a= [1,2,3,4,5]
//     total=0

//     for(let i=0;i<a.length;i++){
//         total +=a[i]
//     }
//      console.log(total);
// }


// addArray()



// const addArray=()=>{
//     const a= [1,2,3,4,5]
//     let temp

//     for(let i=0;i<a.length;i++){
//         for(let j=i+1;j<a.length;j++){
//             temp = a[i]
//             a[i]= a[j]
//             a[j]=temp

//         }
//         console.log(a[i]);
//     }
     
// }


// addArray()

// console.log('enter a number');


// const c = [2,8, 2, 3, 3, 3, 5,6]


// for (i = 0; i < c.length; i++) {
//    for( j=i+1; j < c.length-1; j++){
//     if (c[i] === 5) {
//         temp = c[i]
//         c[i]=c[j]
//         temp =c[j]

//     }

//    }
        
//     console.log(c[i]);
    
// }


const p = [1,2,3,34,2]
let h=77

for (i = 0; i < p.length; i++) {
   
    if(i==3){
        p[i]=h

    }
   console.log(p[i]);

}