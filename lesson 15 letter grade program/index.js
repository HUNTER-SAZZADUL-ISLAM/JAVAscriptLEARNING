var number;
number=parseInt(prompt("enter your grade"));
if(number>=80 && number<=100 )
    document.write("your grade is A+");
else if(number>=70 && number<=79)
    document.write("your grade is A");
else if(number>=60 && number<=69)
    document.write("your grade is B");
else if(number>=50 && number<=59)
    document.write("your grade is C");
else if(number>=40 && number<=49)
    document.write("your grade is C-");
else if(number>=33 && number<=39)
    document.write("your grade is D");
else if(number>=0 && number<=32)
    document.write("you are faild ");
else 
document.write("wrong input ");