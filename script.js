console.log("tout fonctionne");

const button = document.getElementById("button0");
// const container = document.querySelector(".container");
const cards = document.querySelectorAll('.cards');

    console.log(button);
    console.log(document.querySelector('.cards'));
    console.log(document.querySelectorAll('.cards'));

button.addEventListener("click", function () {


  // if (container.classList.contains("active")) {
  //  container.classList.remove("active"); 
  // } else {
  //   container.classList.add("active");
  // }


    // cards[0].classList.toggle("active");
    // cards[1].classList.toggle("active");
    // cards[2].classList.toggle("active");
    // cards[3].classList.toggle("active");
    // cards[4].classList.toggle("active");

    for (i = 0; i < 5; i++) {
    cards[i].classList.toggle("active");
    cards[i].style.transitionDelay = (0.40 * i) + "s";
    }
});



const button1 = document.getElementById("button1");
const element = document.getElementById("card0");
button1.addEventListener("click", function() {
  element.classList.toggle("animated");
});

const button2 = document.getElementById("button2");
const body = document.getElementById("body");
button2.addEventListener("click", function() {
  body.classList.toggle("violet");
})

const button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
  body.classList.toggle("noir");
})

const button4 = document.getElementById("button4");
button4.addEventListener("click", function() {
  body.classList.toggle("rouge");
})