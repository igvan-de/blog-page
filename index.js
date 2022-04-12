function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// function to check if required fields in form are correct and filled in
// in not then show which ones are required

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




function formCheck(form) {
  console.log('form' , form);
}

// let nameEl = document.getElementById("nameId");
// let surnameEl = ;
// let meilEl = ;
// let 

// nameEl.setAttribute("required", true);
