function returnOddsArray1to255() {
    var oddArray = [];
    for (var num=0; num < 255; num+=2)
    { oddArray.push(num); }
    console.log(oddArray);
    return oddArray;
}
returnOddsArray1to255();

function countGreaterThanY(arr, y) {
    var numGreater = 0;
    for(var idx = 0; idx < arr.length; idx++) {
        if (arr[idx] > y){ 
        numGreater++;
        }
    }
    return numGreater;
}
console.log(countGreaterThanY([1999,22112,32,433], 1928));

function printMaxMinAverage(arr) {
    if (arr.length == 0) { return; }
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    foreach (item in arr) 
    {
        if (item < min)
        { min = item; }
        if (item > max)
        { max = item; }
        sum += item;
    }    
    let avg = sum / arr.length;
    return (`the min is ${ min} the max is ${max} the avarage is ${avg}`);
}
console.log(printMaxMinAverage([1,2,3,4]));

function squareArrVals(arr) {
    for ( var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx] * arr[idx];
    }
    return arr;
}  
console.log(squareArrVals([1,2,3,4,5,6]));

function zeroOutArrayNegativeVals(arr) {
    for ( var idx=0; idx<arr.length;idx++) {
        if (arr[idx]<0) { arr[idx]=0; }
    }
    return arr;
}
console.log(zeroOutArrayNegativeVals([0,2,0,4,-2,]));

function shiftArrayValsLeft(arr) {
    for(var ix=0 ;ix<arr.length; ix++) {
        arr[ix - 1] = arr[ix];
    }
    arr.length--;
    return arr;
}
console.log(shiftArrayValsLeft([0,1,2,3,4,5,6]));


function swapStringForArrNegs(arr){
    for (var idx = 0; idx<arr.length; idx++) {
    if(arr[idx] < 0) { arr[idx]="Dojo" }
    }
    return arr;
}
console.log(swapStringForArrNegs([1,2,3,4,-1,-2,-3]));
