
//function to open application form
function showForm(){
    const adoptionForm = document.getElementById('adoptionForm');
    adoptionForm.classList.remove('hidden');
}

//function to close application form
function closeForm(){
    const adoptionForm = document.getElementById('adoptionForm');
    adoptionForm.classList.add('hidden');
}

//function for going to previous page
function goBack(){
    history.back();
}

//validation user address
function validateAddress(){
    let textValidation=/^[A-Za-z]{3,}([A-Za-z\s]{1,})*$/;
    let houseNoValidation=/^[A-Za-z0-9]+([-A-Za-z0-9\s/]+)*$/

    let city =document.getElementById('city').value.trim();
    let landmark=document.getElementById('landmark').value.trim();
    let houseNo=document.getElementById('HouseNO').value.trim();
    let otherInfo=document.getElementById('otherInfo').value.trim();

    if(city.length<3){
        alert("Inavlid City Name");
        return false;
    }
    if(!textValidation.test(city)){
        alert("Inavlid City Name Please Enter Alphabate only");
        return false;
    }

   if(landmark.length<3){
      alert("Inavlid landmark");
      return false;
    }
    if(!textValidation.test(landmark)){
        alert("Inavlid landmark Please Enter Alphabate only");
        return false;
    }
    if(!houseNoValidation.test(houseNo)){
        alert("Inavlid House no. ");
        return false;
    }
    if(otherInfo.length<3){
        alert("Inavlid Information");
        return false;
      }
      if(!textValidation.test(otherInfo)){
          alert("Inavlid Information Please Enter letters only");
          return false;
      }

}
