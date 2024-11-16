
//Validating user email and review message

let regemail=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
let textValidation=/^[A-Za-z]{3,}([A-Za-z\s]{1,})*$/;

function reviewValidation(){
    let name=document.getElementById('name').value.trim();
    let email= document.getElementById("email");
    let message =document.getElementById('message').value.trim();

    if(name.length<3){
        alert("Please Enter Valid Name");
        return false;
    }
    if(!textValidation.test(name)){
        alert("Inavlid Name Please Enter Alphabate only");
        return false;
    }
    
    if(!email.value.match(regemail)){
       window.alert("Invalid Email address");
       return false;
    }
    
    if(!textValidation.test(message)){
        alert("Message can not allowed numbers") ;
        return false;
    }
}