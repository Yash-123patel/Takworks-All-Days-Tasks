let regpassword = /[a-z A-Z 0-9 @#$%&*_]{8,12}/;
let regemail=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

let textValidation=/^[A-Za-z]{3,}([A-Za-z\s]{1,})*$/;


//function for validate all registerd values
function registerValidation(){
   let name=document.getElementById('name').value.trim();
   let email= document.getElementById("email");
   let password =document.getElementById("password");
   let cPassword=document.getElementById("confirm-password");
   let mobileno=document.getElementById("mobile");
   let city=document.getElementById('city').value.trim();
   let aadharNo=document.getElementById("aadhar");
   
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
    if(city.length<3){
        alert("Inavlid City Name");
        return false;
   }
    if(!textValidation.test(city)){
        alert("Inavlid City Name Please Enter Alphabate only");
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

//previous page
function goBack(){
    history.back();
}