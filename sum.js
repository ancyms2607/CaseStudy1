
function sum(array){
    var sum=0,
    i=array.length;
   while(i--)
   sum+=Math.pow(array[i], 2);
return sum;
 
}
console.log("Sum of Squares of Array:")
console.log(sum([11,2,42,9,7]));

