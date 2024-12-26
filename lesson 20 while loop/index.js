for(var i=1; i<=100;i++){
    document.write(" "+i);
}
document.write("</br>");
var j=1
while(j<=100){
    document.write(" "+j);
j++
}

var sum=0;
var j=1
while(j<=10){
    sum=sum+j ;
    j++
}
document.write("</br> sum = "+sum);

//task -6 write a programme that will print sum of all numbers that are divisible by 3&5 from 1-100;
var divcount=0 ;
var sum=0;
j=1;
while(j<=100){

    if(j%3==0 && j%5==0){
        divcount=divcount+j;
    }
    j++
}
document.write("</br> sum of all numbers that are divisible by 3&5 from 1-100 = "+divcount);
