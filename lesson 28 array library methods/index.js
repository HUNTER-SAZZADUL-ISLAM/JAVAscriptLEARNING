//array methods
//shift(),unshift(),splice(pos,noe,ele1,ele2...),
//shift will remove element from the biggining (opposit of pop)

/*var country1=["bangladesh","india","nepal","mayanmar"];
  var country2=["VUTAN","JAPAN","ENGLAND","JAMAIKA"];
  document.write(country1);
  document.write("</br>");
  country1.shift();//shift will remove element from the biggining (opposit of pop)
  document.write(country1);
  document.write("</br>");
 country1.unshift("BANGLADESH")//ITS OPPOSITE OF PUSH IT ADDS ELEMENT FROM THE BEGINNING
 document.write(country1);
 document.write("</br>");

  document.write(country2);
  document.write("</br>");*/

  // NOW WE WILL USE SPLICE 
  // BY SPLICE WE CAN ADD AND REMOVE ELEMENT 
  var country1=["bangladesh","india","nepal","mayanmar"];
  document.write(country1);
  document.write("</br>");
  //splice(indexPossition,romove last  elements number, elements)
  /*country1.splice(2,0,"kajol","sazzad")
  document.write(country1);
  document.write("</br>");
  // result bangladesh,india,nepal,mayanmar
//bangladesh,india,kajol,sazzad,nepal,mayanma


  
 /*
  //splice(indexPossition,romove last  elements number, elements)
  country1.splice(2,2,"kajol","sazzad")
  document.write(country1);
  document.write("</br>");
  // result bangladesh,india,nepal,mayanmar
//bangladesh,india,kajol,sazzad
  

// another thing we can do using splice is remove elements ex: splice(1,2)
// it wll remove two elements from index 1-2 below example
country1.splice(1,2);
  document.write(country1);
  document.write("</br>");
  //result bangladesh,india,nepal,mayanmar
//bangladesh,mayanmar

// now slice method IT WILL REMOVE NUMBER OF  ELEMENTS FROM THE BIGINNING we can also use beginning and ending index to remove like country.slice(1,2) 
// NOTE WE WILL NEED A NEW ARRY TO STORE IT
// it never changes the original array
var Newcountry = country1.slice(2);
document.write(Newcountry);
document.write("</br>");
//result bangladesh,india,nepal,mayanmar
//nepal,mayanmar
*/

// now we can sort  any arry alphabetically  but we will need another array 
//a-z
var sortedcountry= country1.sort()
document.write(sortedcountry+"</br>");
//result bangladesh,india,nepal,mayanmar
//bangladesh,india,mayanmar,nepal
// reverse sort z-a

country1.reverse();
document.write(sortedcountry+"</br>");

// importent thing number sorting 
var numbers =[20,15,13,14,78,41,4]
numbers.sort(function(a,b){
    return a-b
})
document.write(numbers+"</br>");
// importent thing number sorting reverse 
var numbers =[20,15,13,14,78,41,4]
numbers.sort(function(a,b){
    return b-a
})
document.write(numbers);