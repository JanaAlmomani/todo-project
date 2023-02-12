
'use strict';
var yourName;
var yourGender;
var yourAge;
let a1,a2,a3;
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
        
            a1=prompt( yourName+" Are you happay with our app");
                 if(a1==""){
                      a1="invalid";}
            a2=prompt(yourName+" Do you have any question");
                if(a2==""){
                     a2="invalid";}
            a3=prompt(yourName+" Do you have any suggestion");
                if(a3==""){
                    a3="invalid";}
                
    

        let array=[yourName,yourGender,yourAge,a1,a2,a3];
        function displayAnswer(arr)
        {
            for(let i=0; i<array.length;i++)

            {
                console.log(array[i]);
            }
        }
        displayAnswer(array);
       
