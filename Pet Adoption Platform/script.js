

const adoptionForm = document.getElementById('adoptionForm');

//function to open application form
function showForm(){
    adoptionForm.classList.remove('hidden');
}

//function to close application form
function closeForm(){
    adoptionForm.classList.add('hidden');
}
function goBack(){
    history.back();
}