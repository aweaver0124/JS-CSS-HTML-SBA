
// Carousel Tutorial Credit - 
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

// Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//button listeners
nextButton.addEventListener('click', function(){
     if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

prevButton.addEventListener('click', function(){
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
})

carouselSlide.addEventListener('transitionend', function(){
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
} )

document.getElementById('login-signup-button').addEventListener('click', validate);

function validate(e){
    e.preventDefault();
    var fn = document.getElementById('fullnameId').value;
    var user =  document.getElementById('usernameId').value
    var pass = document.getElementById('passwordId').value;
    if (fn == null || fn == ""){
        let error = document.createElement("li");
        error.classList.add('error-message');
        error.innerHTML = "Name cannot be blank";
        let ul = document.getElementById('errors');
        ul.appendChild(error);
    }
    if (user == null || user ==""){
        let error2 = document.createElement("li");
        error2.classList.add('error-message');
        error2.innerHTML = "Username cannot be blank";
        let ul = document.getElementById('errors');
        ul.appendChild(error2);
    }
    if (pass == null || pass == ""){
        let error3 = document.createElement("li");
        error3.classList.add('error-message');
        error3.innerHTML = "Password cannot be blank";
        let ul = document.getElementById('errors');
        ul.appendChild(error3);
    } 
    alert(fn + " has signed in!")
    return true;
}

