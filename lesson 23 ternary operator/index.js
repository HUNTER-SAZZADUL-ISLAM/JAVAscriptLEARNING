//if a number is possitive or nagative
/* 
if(number>0){
    document.write("possitive");
}
else{
    document.write("negatie");
}


if(number%2==0){
    document.write("even number");
}
else{
    document.write("odd number");
}
    condition  if  true          false 
    var number=Number(prompt("enter a number"));
  var result =  number > 0 ? "possitive" :"nagative"
  document.write(result);*/ 
  //another way 
/*
  var number=Number(prompt("enter a number"));
  var result =  number > 0 ? document.write("possitive") :document.write("negetive")
 // document.write(result);
*/
/*//find a number if possitive negative or zero  using turnery operator 
 var number = Number(prompt("enter a number"));
 var result = number> 0 ? "possitive" : number<0 ? "negative " : "zero";
 document.write(result);*/

 // task take three number find which number is bigger using turnery operator
 var num1 =Number(prompt("enter first number"));
 var num2 = Number(prompt("enter second number "));
 var num3= Number(prompt("third number "));
 
 var result = num1>num2&&num1>num3 ? num1 : num2>num1&&num2>num3 ? num2 : num3 ;
 document.write("leargest number is : "+result);