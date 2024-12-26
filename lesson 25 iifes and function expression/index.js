/*
function display(){
    document.write("display");
}

display();
*/
/* iffee function 
(function display(){
    document.write("display");
})();
*/
//task take two sum from user and make two addition 
( function sum( a,  b){
    var result= a+b;
    document.write("sum of "+a+"&"+b+" : " +result)
})(5,6)
//(a=Number(prompt("enter first number"),b=Number(prompt("enter first number")))
//function expression 

var expression = function massage( text){
    
    document.write(text);
}
expression("sazzad");