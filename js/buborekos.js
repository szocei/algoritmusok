'use strict'
const arr=[1.23, 2.34, 23.34,234.345,23.123,1.23,2.23,3.45];

function rendez(arr){
    let n = arr.length;
    for(let i=n-1;i>0;i--)
        for(let j=0; j<i; j++)
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;                
            }
    
    console.log([arr]);
}

rendez(arr);
