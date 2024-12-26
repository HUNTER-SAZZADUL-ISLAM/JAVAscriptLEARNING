var total, text1 ,text , len ,slic;
text="BANGLADESH";
len=text.length;
document.write("total length of BANGLADESH ="+len+"<br/>");

text1=prompt("enter your name:");// taking input
len=text1.length;
document.write("total length of  ="+len);
document.write("<br/>character at 2 no index " + text1.charAt(2));
document.write("<br/> upper case "+text1.toLocaleUpperCase()+"<br/>" );


// now concatanation means connecting two strings 
total = text.concat(text1);
document.write(total);
//slice function that means it can cut a string with its index from to 
slic= text.slice(2,5);
document.write("cutted portion is "+ slic);
//task 2 done
var Fname,Lname , addNAME,Fullname,lengthName,UPname,Prnt3rd;
Fname=prompt("enter your first name :");
document.write("<br/> your first name is  : "+Fname)
Lname=prompt("enter your last name :");
document.write("<br/> your last name is "+Lname);
document.write("<br/> your full  name is "+Fname+" "+Lname);

addNAME=Fname+Lname;
document.write("<br/> your full using concat +  name is "+addNAME);
document.write("<br/> your full using concat library +  name is "+Fname.concat(Lname));
addNAME=Fname.concat(Lname);
lengthName=addNAME.length;
document.write("<br/> your full   name  lengthg is "+lengthName);
Fullname=addNAME;
document.write("<br/> test "+Fullname);
UPname=Fullname.toLocaleUpperCase();
document.write("<br/> your full   name  in capital is "+UPname);
Prnt3rd=Fullname.charAt(3);
document.write("<br/> 3rd position from full name :"+Prnt3rd);


