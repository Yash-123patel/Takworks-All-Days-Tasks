
//function to address change pop up
function changeAddress(){
    const address = document.getElementById('Change');
    
    address.classList.remove('hidden');
}

// function to submit form and close the popup
function closeAddressWindow(){
    const address = document.getElementById('Change');
    document.frm.submit();
    address.classList.add('hidden');
}

//function to check which payment option user used
function checkPaymentOption(){
    const paymentOpt=document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if(paymentOpt==="qr"){
      let opt= document.getElementById('QrForm');
       opt.classList.remove("hidden");

    }

    else if(paymentOpt==="upi"){
        let opt=document.getElementById('upiForm');
        opt.classList.remove("hidden");

    }

    else if(paymentOpt==="net"){

        let opt=document.getElementById('netBankingForm');
        opt.classList.remove("hidden");

    }
    else if(paymentOpt==="card"){
        let opt=document.getElementById('cardPaymentForm');
        opt.classList.remove("hidden");
    }

}

//close qr popup
function closeQrForm(){
    opt= document.getElementById('QrForm');
    opt.classList.add("hidden");

}

//close upi popup
function closeUpiForm(){
    let opt=document.getElementById('upiForm');
    opt.classList.add("hidden");

}

//close net banking popup
function closeNetBankingForm(){
    let opt=document.getElementById('netBankingForm');
    opt.classList.add("hidden");
}

//close card popup
function closeCardPayment(){
    let opt=document.getElementById('cardPaymentForm');
    opt.classList.add("hidden");
}



//previous page
function goBack(){
    history.back();
}