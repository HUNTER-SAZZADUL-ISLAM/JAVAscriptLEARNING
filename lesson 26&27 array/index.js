/*var i;
var Name =[];

for(i=0;i<10;i++){
  Name[i]=prompt("enter "+(i+1)+"Name"); 
}

for(i=0;i<10;i++){
    //Name[i]=prompt("enter "+i+"Name");
    document.write((i+1)+"."+Name[i]+"</br>"); 
  }
  document.write(Name.length);*/

  /*var num =[10,20,65,50,14];
  var sum =0;

  for(var i=0;i<5;i++){
    document.write(num[i]+"</br>");
    sum=sum+num[i]; 
  }
  
  document.write(sum);*/

  /* var num =new Array();
  var sum =0;

  for(var i=0;i<5;i++){
    num[i]=parseInt(prompt("enter "+(i+1)+"number"));
     
  }

  for(var i=0;i<5;i++){
    //document.write(num[i]+"</br>");
    sum=sum+num[i]; 
  }
  document.write(sum);  */

  var names= ["sazzad","kajol","ripon","jibpn","tipu"];
  console.log(names.length);
  names.push("jazz"); // push will insert a name at the last item 
  names.push("roton");
  names.push("tara");
  document.write(names);
  document.write("</br>");
  names.pop(); //pop will element last content from the array 
  document.write(names);
  document.write("</br>");
  names.pop(); //pop will element last content from the array 
  document.write(names);


  // now we will marge two array 
  var country1=["bangladesh","india","nepal","mayanmar"];
  var country2=["VUTAN","JAPAN","ENGLAND","JAMAIKA"];
  var country =country1.concat(country2);
  document.write(country);
  document.write("</br>");