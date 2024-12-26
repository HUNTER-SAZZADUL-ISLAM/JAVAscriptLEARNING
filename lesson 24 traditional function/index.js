//traditional function

function multiple(num1,num2){
    //var num =Number(prompt("enter a number"));
    var result= num1*num2;
    document.write("result = "+result);
}

function square(num1){
    //var num =Number(prompt("enter a number"));
    var result= num1*num1;
    return result;
}
multiple(5,6) ;
multiple(2,1);

var res= square(5);
document.write("square is "+res);