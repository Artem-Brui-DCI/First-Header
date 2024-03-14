



// Script PUSH the HAMBURGER

let class_nav = document.querySelector('.nav');
let class_hamburger = document.querySelector('.hamburger');
let class_logo = document.querySelector('.logo');
let class_link = document.querySelectorAll('.link');
let a = document.querySelectorAll('a');
let h1 = document.querySelector('h1');

document.querySelector('.hamburger').addEventListener('click', ()=> {
  if (window.getComputedStyle(class_nav,null).getPropertyValue("display") === "none") 
  {
    class_nav.style.display = "block";
    class_nav.classList.add('mob-block');
    h1.style.margin = "47vh 0 0 0";
    
  } else {
    class_nav.style.display = "none";
    class_nav.classList.remove('mob-block');
    h1.style.margin = "0";
  }
}
)
// END Script PUSH the HAMBURGER

// Script Mob-Desktop Version

function mobVersion(screen) {
  if (screen.matches) {
    class_nav.style.display = "none";
    class_nav.classList.add('nav-mob');
    class_hamburger.classList.add('hamburger-mob');
    class_logo.classList.add('logo-mob');
    for (let xx of a) {
      xx.classList.add('link-mob');
    }
  } else {
    class_nav.style.display = "flex";
    class_nav.classList.remove('nav-mob');
    class_hamburger.classList.remove('hamburger-mob');
    class_logo.classList.remove('logo-mob');
    for (let xx of a) {
      xx.classList.remove('link-mob');
    }
  }
}

let screen = window.matchMedia("(max-width: 1250px)")

mobVersion(screen);

screen.addEventListener("change", function() {
  mobVersion(screen);
});

// END Script Mob-Desktop Version

