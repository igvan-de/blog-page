function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// function to check if required fields in form are correct and filled in
// in not then show which ones are required

// -- COAROUSEL --
let rev = 0;
let className = '';
// carousel(rev, className);

function previousReview(className) {
    rev = rev - 1;
    carousel(rev,className);
}

function nextReview(className) {
    rev = rev + 1;
    carousel(rev, className);
}

function carousel(review, className) {

    let reviews = className; 

    if (className === "portrets") {
      reviews = document
      .getElementsByClassName("portrets__items");
    } else if (className === "moodboards") {
      reviews = document
      .getElementsByClassName("moodboards__items");
    } else if (className === "other") {
      reviews = document
      .getElementsByClassName("other__items");
    }
    
    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "block";
}


// -- FORM --
var form = document.getElementById("form_wrapper");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function formCheck() {

  // all reqeuired ids of form field
  const firsttName = document.getElementById("firstName");
  const surname = document.getElementById("surname");
  const email = document.getElementById("email");
  const comment = document.getElementById("comment");
  let allIds = [firsttName, surname, email, comment];

  // all error messages
  const warning = document.getElementsByClassName("warning");

    function elementChecker(element, i) {
      if (element.value.length <= 0 || element.id == 'email' && element.validity.typeMismatch) {
        element.classList.add("required");
        warning[i].classList.add("warning_text");
      } else if (element.value.length > 0) {
        element.classList.remove("required");
        warning[i].classList.remove("warning_text");
      }
    }

    for(let i = 0; i < allIds.length; i++) {
      elementChecker(allIds[i], i);
    }
}
