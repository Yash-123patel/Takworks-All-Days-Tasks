
//function to open hidden instruction for the filter
function showFilterInstruction() {
  const filter = document.getElementById('filter');
  filter.classList.remove('hidden'); 
  document.getElementById('showFilterInstructions').classList.add('hidden');
}

//function to close hidden instruction for the filter
function closeFilterInstruction() {
  const filter = document.getElementById('filter');
  filter.classList.add('hidden'); 
  document.getElementById('showFilterInstructions').classList.remove('hidden'); 
}


//function to call get all the details of pet from database based on id
function getPetDetails(id){
  console.log(id);
  document.frm.id=id;
  document.frm.action="pet_details.html";
  document.frm.submit();
}


//function for search bar
function searchPets() {
  
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
   let noresult= document.getElementById("noresult");
   let isvisible=false;
    cards.forEach(card => {
      const animal = card.getAttribute('data-animal').toLowerCase();

      if (animal.includes(query)) {
        
        card.style.display = 'block'; 
        isvisible=true;
      } else {
        
        card.style.display = 'none';
      }
      
    });
    if(!isvisible){
      noresult.style.display='block';
    }
    else{
      noresult.style.display='none';
    }
  }


  //function to filter based on categoery and states.
  function filter() {
    const query = document.getElementById('pet').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    let noresult = document.getElementById("noresult");
    let isvisible = false;
    let state = document.getElementById("states").value.toLowerCase();

    cards.forEach(card => {
        const animal = card.getAttribute('data-animal').toLowerCase();
        const st = card.getAttribute('state-name').toLowerCase();


          if(query==="all" && state==="all"){
            card.style.display = 'block';
                isvisible = true;
          }
          else if(st.includes(state) && animal.includes(query)){
                card.style.display = 'block';
                isvisible = true;
          }
         else if(animal.includes(query)&& state==="all"){
                card.style.display = 'block';
                isvisible = true;
          }
          else if(query==="all" &&st.includes(state)){
               card.style.display = 'block';
                isvisible = true;
          }
          else{
            card.style.display = 'none';
              
          }

        });
          if (!isvisible) {
            noresult.style.display = 'block';

        } else {
            noresult.style.display = 'none';
        }

  

    
}

    
  //function to clear all the filters.
  function resetFilters() {
    document.getElementById('pet').value = 'all';
    document.getElementById("states").value = 'all';
    filter(); 
  }

  //function to show profile popup
  let isProfile=false;
  function showProfilePage(){

   if(!isProfile){
    let profile=document.getElementById('profile');
    profile.classList.remove("hidden");
    isProfile=true;
   }
   else{
    let profile=document.getElementById('profile');
    profile.classList.add("hidden");
    isProfile=false;
   }
  }

//previous page
  function goBack(){
    history.back();
  }
