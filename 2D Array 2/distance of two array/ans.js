
var findTheDistanceValue = function(arr1, arr2, d) {
  let res = 0;
    for(let i =0; i<arr1.length; i++){
      let sum = 0;
      for(let j = 0; j<arr2.length; j++){
        if(Math.abs(arr1[i]-arr2[j]) <=d){
          j = arr2.length;
        } else{
            sum++;
        }
       
      }
     if(sum === arr2.length){
       res++
     }
    }
    return res;
};