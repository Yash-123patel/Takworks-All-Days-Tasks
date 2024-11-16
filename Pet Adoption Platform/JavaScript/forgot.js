let regpassword = /[a-z A-Z 0-9 @#$%&*_]{8,12}/;
let regemail=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//function to check forget password values
function checkCredentials(){
    let password =document.getElementById("password");
   let cPassword=document.getElementById("cpassword");

   if(!email.value.match(regemail)){
    window.alert("Invalid Email address");
    return false;
    }
    if (!password.value.match(regpassword)) {
        window.alert("Password must contain all cases");
        return false;
    }	
    if(!cPassword.value.match(password.value)){
        window.alert("Password not matched");
        return false;
    }
}

function goBack(){
    history.back();
}