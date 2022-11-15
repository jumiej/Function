//   NO  1
var array = [2,3,1,5,4,5];
var minvalue = array[0]; 
for (var i = 0; i < array.length; i++) {
    if(array[i]<minvalue)
    {
        minvalue = array[i];
    }

}
  console.log(minvalue + ''  + "is the smallest");


// NO 2

//   var array = [2,3,1,5,4,5];
// var maxvalue = array[0]; 
// for (var i = 0; i < array.length; i++) {
//     if(array[i]<maxvalue)
//     {
//         maxvalue = array[i];
//     }

// }
//   console.log(maxvalue + ''  + "is the biggest");

// N0 3

  var t = [2, -1, 3, 1, -6, 5, -7, 4, -12, -8]
  var positiveArr = [];
  var negativeArr = [];
  t.forEach(function(item){
  if(item<0){
  negativeArr.push(item);
  var minvalue =  negativeArr[0]; 
    for (var i = 0; i <  negativeArr.length; i++) {
    if( negativeArr[i]<minvalue)
    {
        minvalue =  negativeArr[i];
    }
    }
  else{
  positiveArr.push(item)
  }
  })

  console.log(positiveArr) 
  console.log(negativeArr) 

