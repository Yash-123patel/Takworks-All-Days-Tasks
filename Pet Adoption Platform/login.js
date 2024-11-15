let regpassword = /[a-z A-Z 0-9 @#$%&*_]{8,12}/;
	let regemail=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
	
	//function for validation email and password
	function checkEmailAndPassword() {
		let email=document.getElementById("email");
		let password = document.getElementById("password");
		
		
		 if(!email.value.match(regemail)){
			 window.alert("Invalid Email address");
             return false;
		 }
		 
		
		 if (!password.value.match(regpassword)) {
             window.alert("Invalid Password");
             return false;
         }	 
	}

	function goBack(){
		history.back();
	}