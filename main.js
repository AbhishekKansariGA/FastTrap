//MENU PART JS
$(function() {
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});





//ACHIVEMENT HTML PART JS


let num = document.getElementById("num");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  }
  else {
    counter += 1;
    num.innerHTML = counter + "%";
  }
}, 2000 / 65);




//ACHIVEMENT CSS PART JS

let numOne = document.getElementById("numOne");
let count = 0;
setInterval(() => {
  if (count == 80) {
    clearInterval();
  }
  else {
    count += 1;
    numOne.innerHTML = count + "%";
  }
}, 2000 / 95);




//ACHIVEMENT JAVASCRIPT PART JS


let numTwo = document.getElementById("numTwo");
let coun = 0;
setInterval(() => {
  if (coun == 60) {
    clearInterval();
  }
  else {
    coun += 1;
    numTwo.innerHTML = coun + "%";
  }
}, 2000 / 65);



//ACHIVEMENT JAVA & KOTLIN PART JS

let numJava = document.getElementById("numJava");
let cou = 0;
setInterval(() => {
  if (cou == 99) {
    clearInterval();
  }
  else {
    cou += 1;
    numJava.innerHTML = cou + "%";
  }
}, 2000 / 115);


let numKt = document.getElementById("numKt");
let coukt = 0;
setInterval(() => {
  if (coukt == 99) {
    clearInterval();
  }
  else {
    coukt += 1;
    numKt.innerHTML = coukt + "%";
  }
}, 2000 / 115);



//Button Click Show Next Page


document.getElementById("buy-btn").addEventListener('click', myClick)

let urlBtn = "/boat.html";

function myClick(arg) {
  // body...
  window.open(urlBtn, '_blank');
}


document.getElementById("buy-btn-two").addEventListener('click', myClickTwo)

let urlBtnTwo = "/watch.html";

function myClickTwo(arg) {
  // body...
  window.open(urlBtnTwo, '_blank');
}


document.getElementById("buy-btn-three").addEventListener('click', myClickThree)

let urlBtnThree = "/t-shirt.html";

function myClickThree(arg) {
  // body...
  window.open(urlBtnThree, '_blank');
}

document.getElementById("buy-btn-four").addEventListener('click', myClickFour)

let urlBtnFour = "/macbook.html";

function myClickFour(arg) {
  // body...
  window.open(urlBtnFour, '_blank');
}

// Scroll To Top
let topBtn = document.querySelector(".top-btn");

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0;


function subMe(arg) {
  // body...
  document.getElementById("subscribe-btn").innerText = "SUBSCRIBED";
}

function myFb(arg) {
  // body...
  window.open("https://www.facebook.com/abhishek.k.31105/", '_blank');
}


function myIg(arg) {
  // body...
  window.open("https://instagram.com/abhishek_kansari_g.a/", '_blank');
}

function myTw(arg) {
  // body...
  window.open("https://mobile.twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", '_blank');
}

function myYt(arg) {
  // body...
  window.open("https://youtube.com/channel/UCR02sHMu8LjB06-XFgCrWNg", '_blank');
}

function linkedin(arg) {
  // body...
  window.open("https://www.linkedin.com/company/boat-lifestyle/", '_blank');
}
