
'use strict';

// Ask the user to enter his/her name as input.
var yourName=prompt(" Enter your name: ");
/* Ask the user to enter his/her gender as input.
The answer should be either (male or female).*/
var yourGender = prompt("Enter your gender (M / F): ");
if (yourGender == "M" || "F") {
    console.log("Gender is correct");
}else{ 
    
         prompt("Enter your gender (M / F): ");
}
// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
var yourAge=prompt("Enter your age: ")
    if(yourAge<=0){
        alert(" Error");
    }
 /*
    Alert a welcoming message with the name of the user and the title Mr 
    if the user is male and Ms if the user is female,
     and if the gender input is not correct 
     alert the welcoming message without the title, according to the confirmation.
*/
let confirmAction = confirm("Are you sure to skip the welcoming message?");
    if(confirmAction){
        alert("Action successfully executed");
    }else{
        if (yourGender=="M"){
            alert("Welcome Mr " +yourName);
        }else if(yourGender=="F"){
            alert("Welcome Ms " +yourName);
        }
        else{
         alert("Welcome");
         }
                
        }
