
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