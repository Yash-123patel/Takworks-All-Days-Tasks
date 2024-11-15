let regpassword = /[a-z A-Z 0-9 @#$%&*_]{8,12}/;
let regemail=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;


//function for validate all registerd values
function registerValidation(){
   let email= document.getElementById("email");
   let password =document.getElementById("password");
   let cPassword=document.getElementById("confirm-password");
   let mobileno=document.getElementById("mobile");
   let aadharNo=document.getElementById("aadhar");

   
   if(!email.value.match(regemail)){
    window.alert("Invalid Email address");
    return false;
    }
    if (!password.value.match(regpassword)) {
        window.alert("Password must contain all cases");
        return false;
    }	
    if(!password.value.match(cPassword.value)){
        window.alert("Password not matched");
        return false;
    }
    if (mobileno.value.trim().length != 10) {
        alert("Please enter 10 digit valid mobile number");
        return false;
    }
    if((aadharNo.value.trim().length != 12)){
        window.alert("Please enter 12 digit valid aadhar no");
        return false;
    }
    else{
        window.alert("Register Succesfully");
        return true;
    }
}
function goBack(){
    history.back();
}