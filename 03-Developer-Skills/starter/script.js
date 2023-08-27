// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
 const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
 const temperatures2 = [-33, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];



 let calcAmp = (array,array2) => {
    let newArr = [];

    for(let i = 0; i < array.length; i++) {
        newArr.push(array[i])
    }

    for(let i = 0; i < array2.length; i++) {
        newArr.push(array2[i])
    }

    let maxTemp = newArr[0];
    let minTemp = newArr[0];

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== 'error') {
            if (newArr[i] > maxTemp) {
                maxTemp = newArr[i];
            }

            if (newArr[i] < minTemp) {
                minTemp = newArr[i];
            }
        }
    }

    console.log(maxTemp,minTemp);
    console.log(`${maxTemp} is the max temperature, ${minTemp} is the min temperature, ${maxTemp-minTemp} is the amplitude`)
    return maxTemp - minTemp;
 }

 calcAmp(temperatures,temperatures2)*/

 const temp = [17, 21, 23];
 const temp2 = [12, 5,-5,0,4];

 const printForecast = (array) => {
    let stringEl = '... ';

    for (let i = 0; i < array.length; i++) {
        stringEl = stringEl + `${array[i]}C in ${i+1} days... `;
    }

    console.log(stringEl);

    return stringEl;
 }

 printForecast(temp)
 printForecast(temp2)
