// console.log(0 === false);//false strict eqaulity
// console.log(0 == false);//true
// console.log(4+3+"3"); // 73
// console.log("4"+3+3); // 433
// console.log(0.1+0.2); //precision lose
// console.log(1+null); // 1 + 0
// console.log(null + 1); // null
// console.log(1 + undefined); // NaN

// var array=[];
// console.log(array);
// console.log(array.length);
// array[0] = 'first element';
// console.log(array);
// console.log(array.length);
// array[1001] = '1002 element';
// console.log(array);
// console.log(array.length);

function getFirstTen(i, res, limit){

for( j = 0; j < i;j++ ){

    console.log(j);

  if(res.length > limit){
     return res;
    //   break;
  }

    if(j%4 === 0 && j%5 !== 0) {
        res.push(j);
    } 

}
}


var res = []
getFirstTen(101, res, 9)
console.log(res);

function twoSum(array, target){
    var first_element= 0;
    var second_element = 0;
    for(var i=0;i<length(list);i++){
        first_element = array[i];
        if(array.contain){

        }
    }
}

