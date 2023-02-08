
'use strict';
var yourName;
var yourGender;
var yourAge;
// Ask the user to enter his/her name as input.
 yourName=prompt(" Enter your name: ");
if (yourName == ""){
    yourName="invalid";
}
/* Ask the user to enter his/her gender as input.
The answer should be either (male or female).*/
 yourGender = prompt("Enter your gender (M / F): ");
switch(yourGender){
    case 'M':
        console.log("Gender is correct");
        break;
    case 'F':
        console.log("Gender is correct");
        break;
    case '':
        yourGender="invalid";
        console.log("yourGender is invalid");
    default:
        prompt("Please enter your gender (M / F) correctly: ");
}
if (yourGender == ""){

    yourGender="invalid";
}
// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
 yourAge=prompt("Enter your age: ")
    if(yourAge<=0){
        alert(" Error");
    }
    if ( yourAge ==""){
        yourAge="invalid";
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
        // As a user, I would like to answer more questions,
        //  so you should add new three (Yes/No) questions.
        function question(){
            confirm( yourName+" Are you happay with our app");
            confirm(yourName+" Do you have any question");
            confirm(yourName+" Do you have any suggestion");
        }   
       

        let array=[yourName,yourGender,yourAge];
            for(let i=0; i<array.length;i++)

            {
                console.log(array[i]);
            }
        
          question();
       
