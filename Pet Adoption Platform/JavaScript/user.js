
//TO show the userDetails and hiding applications
function showUserDetails(){
    const application=document.getElementById('Applications');
    const userProfile=document.getElementById('userProfile');
    application.classList.add("hidden");
    userProfile.classList.remove("hidden");
}


//TO show all the applications and hiding user details
function showApplicationsPage(){
    const application=document.getElementById('Applications');
    const userProfile=document.getElementById('userProfile');
    application.classList.remove("hidden");
    userProfile.classList.add("hidden");
}

//TO Edit UserDetails One PopUp
function EditUserDetails(){
    let form=document.getElementById('userProfileForm');
    const userProfile=document.getElementById('userProfile');
    userProfile.classList.add("hidden");
    form.classList.remove("hidden");
}





//function for validate all user values
function userValidation(){
    let regemail=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    let textValidation=/^[A-Za-z]{3,}([A-Za-z\s]{1,})*$/;
   
    console.log("came")
   let email= document.getElementById("email");
   let mobileno=document.getElementById("userPhone");
   let aadharNo=document.getElementById("userAadhar");
   let name=document.getElementById('userName').value.trim();
   let city=document.getElementById('userCity').value.trim();
   
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