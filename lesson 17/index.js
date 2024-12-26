//digit spelling 
/* var num;
num=prompt("enter a digit between 0-9");

switch(num){
    case "0":
    document.write("your entered number is '"+num+"' zero");
    break;
    case "1":
    document.write("your entered number is '"+num+"' one");
    break;
    case "2":
    document.write("your entered number is '"+num+"' two");
    break;
    case "3":
        document.write("your entered number is '"+num+"' three")
        break;
        case "4":
            document.write("your entered number is '"+num+"' four")
            break;
    
            case "5":
                document.write("your entered number is '"+num+"' five")
                break;
                case "6":
                    document.write("your entered number is '"+num+"' six")
                    break;
                    case "7":
                        document.write("your entered number is '"+num+"' seven")
                        break;
                        case "8":
                            document.write("your entered number is '"+num+"' eight")
                            break;
                            case "9":
                                document.write("your entered number is '"+num+"' nine")
                                break;
                                case "3":
                                    document.write("your entered number is '"+num+"' three")
                                    break;
                   default:
                   document.write("wrong input");                                                                                            
    
    

}*/
// task using switch make a vowel and consonent detector ;
var Letter;
Letter=prompt("enter a letter ");
Letter=Letter.toLocaleLowerCase();
switch(Letter){
case "a":
case "e":
    case "i":
        case "o":
            case "u":
                document.write("your entered Letter  '"+Letter+"' is VAWEL")
               break;
                default:
    document.write("your entered Letter  '"+Letter+"' is consonant");
}


