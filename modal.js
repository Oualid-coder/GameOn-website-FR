function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close-btn")
var btnFermer = document.getElementsByClassName("btn-fermer")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display = 'none'
}


  // Valider les données entrées par l'utilisateur
  const firstName = document.querySelector('#first_name');
  const lastName = document.querySelector('#last_name');
  const email = document.querySelector('#email');
  const birthdate = document.querySelector('#birthdate');
  const quantity = document.querySelector('#quantity');
  const location1 = document.querySelector('#location1');
  const location2 = document.querySelector('#location2');
  const location3 = document.querySelector('#location3');
  const location4 = document.querySelector('#location4');
  const location5 = document.querySelector('#location5');
  const location6 = document.querySelector('#location6');
  const terms = document.querySelector('#checkbox1');
  const checkbox2 = document.querySelector('#checkbox2');

  const emailError = document.querySelector('#email-error')
  const nameError = document.querySelector('#name-error')
  const firstnameError = document.querySelector('#firstname-error')
  const birthdateError = document.querySelector('#birthdate-error')
  const checkboxError = document.querySelector('#checkbox-error')
  const termsError = document.querySelector('#terms-error')
  const quantityError = document.querySelector('#quantity-error')
  const locationRadios = document.getElementsByName("location");

  let isValid = true;

const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
  // Empêcher la soumission du formulaire
  event.preventDefault();


   if (firstName.value.length < 2) {
     firstnameError.style.display = "block";
     isValid = false;
   } else {
    firstnameError.style.display = "none";
   }



  if (lastName.value.length < 2) {
    nameError.style.display = "block";
     isValid = false;
  } else {
   nameError.style.display = "none";
}




function validateBirthdate() {
  var date = new Date(birthdate.value);
  if (birthdate.value == "") {
    isValid = false;
    birthdateError.style.display = "block";
  } else if (!isNaN(date.getTime())) {
    dateValue = birthdate.value;
    isValid = true;
    birthdateError.style.display = "none";
  } else {
    dateValue = "";
    isValid = false;
    birthdateError.style.display = "block";
  }
}
validateBirthdate();

birthdate.addEventListener("input", validateBirthdate);


if(isNaN(quantity.value)  || quantity.value=="" || quantity.value<0){
  quantityError.style.display="block"
  isValid=false
 
} else{
  isValid=true
  quantityError.style.display="none"
}

quantity.addEventListener("input", function() {
  if (quantity.value != "") {
    // La valeur du range est valide
    isValid=true
    quantityError.style.display="none"

  } else {
    // La valeur du range est vide
    isValid=false
    quantityError.style.display="block"
  }
});


if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
  checkboxError.style.display = 'block';
  isValid = false;
} else {
  checkboxError.style.display = 'none';
  isValid = true;
}

   function checkCheckbox() {
    
     if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
       checkboxError.style.display = 'block';
       isValid = false;
     } else {
       checkboxError.style.display = 'none';
       isValid = true;
     }
   }
  
   // Ajouter un écouteur d'événement sur chaque checkbox
   location1.addEventListener('change', checkCheckbox);
   location2.addEventListener('change', checkCheckbox);
   location3.addEventListener('change', checkCheckbox);
   location4.addEventListener('change', checkCheckbox);
   location5.addEventListener('change', checkCheckbox);
   location6.addEventListener('change', checkCheckbox);



   if (!isValidEmail(email.value)) {
     emailError.style.display = "block";
     isValid = false;
   } else {
     emailError.style.display = "none";
   }


   if (!terms.checked) {
     termsError.style.display = "block";
     isValid = false;
   } else {
     termsError.style.display = "none";
   }


  // Si les données sont valides, soumettre le formulaire
  if (isValid) {
    
  
    document.getElementsByClassName("btn-submit")[0].style.display="none";
    var formDataList = document.getElementsByClassName("formData");
    for (var i = 0; i < formDataList.length; i++) {
      formDataList[i].style.display = "none";
    }
    document.getElementsByClassName("modal-body")[0].style.height = "500px";
    btnFermer[0].style.display = "block";
   
    //var parent = document.querySelector('#parent-element');

    var parent = document.getElementById('parent-btn');
   
    // Ajoutez un gestionnaire d'événement 'click' à l'élément parent
    parent.addEventListener('click', function(event) {
      // Vérifiez si l'élément cliqué est un bouton
      if (event.target && event.target.matches('button')) {
        // Exécutez du code en réponse à l'événement sur le bouton
       closeModal();
       setTimeout(() => {
        location.reload();
       }, 2000);   
      }
    });
   

    
  }
});

// Fonction pour valider l'adresse email
function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}