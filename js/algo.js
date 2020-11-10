'use strict'

//1. Minimum kiválasztás

const intArr = [3254, 546, 23426, 3476, 234, 256365, 23, 4];

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}

// getMinElementFromAnArray(intArr);
// getMinElementFromAnArray([345, 546, 234, 47]);

//2. Maximum kiválasztás

const intArr2 = [11,2,312,4,5,6,17,84,9,10,12,14]

function maxKivalasztas(arr) {
    let max = arr[0];
    for (let i=1; i<arr.length; i += 1){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    console.log(max)
}
maxKivalasztas(intArr2);

//3. Tömb átlaga

function atlag(arr){
    let osszeg = 0;
    let db = 0;
     for (let i=0;i<arr.length; i += 1){
         osszeg=osszeg+arr[i];
         db += 1;
     }
     let atlag= osszeg / db;
     console.log(atlag);
}

atlag(intArr2);

//4. Tömb öszege

function osszeg(arr){
    let osszeg=0;
    for(let i=0; i<arr.length; i += 1){
        osszeg = osszeg + arr[i];
    }
    console.log(osszeg);
}
osszeg(intArr2);

//5. Párosok száma

function parosokSzama(arr){
    let db = 0;
    for (let i = 0; i<arr.length ; i += 1){
        if (arr[i]%2==0){
            db += 1;
        }
    }
    console.log(db);
}

parosokSzama(intArr2);

//6. Második legkisebb elem, növekvő sorrend

function masodikLegkisebb(arr){
    let temp=0;
    let n=arr.length;
    for(let i=0; i<n-1; i += 1){
        for(let j=i+1;j<n; j += 1){

        
      if(arr[i]>arr[j]){
          temp=arr[j];
          arr[j]=arr[i];
          arr[i]=temp;
      }
    }
    }
    console.log([arr]);
    console.log(intArr2[1]);
}

masodikLegkisebb(intArr2);

//7. 3. legnagyobb eleme csökkenő sorrend

function harmadikLegnagyobb(arr){
    let temp=0;
    let n=arr.length;
    for(let i=0; i<n-1; i += 1){
        for(let j=i+1;j<n; j += 1){

        
      if(arr[i]<arr[j]){
          temp=arr[j];
          arr[j]=arr[i];
          arr[i]=temp;
      }
    }
    }
    console.log([arr]);
    console.log(intArr2[2]);
}

harmadikLegnagyobb(intArr2);






