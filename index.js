
function reveal(){
    var reveals = all('.reveal');
    for(let i=0;i<reveals.length;i++){
        var windowheight= window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            setTimeout(() => {
                reveals[i].classList.add('active');
            }, i*200);
        }
    }
}

function helloWorld(){
    const hello = id("helloworld");
    const text = "hello!";
    typewriter(hello,text,0);
}

function typewriter(el, text, i){
    const min = 25;
    const max = 150;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if(i<text.length){
        el.textContent += text.charAt(i);
        i++;
        setTimeout(() => {
            typewriter(el,text,i)
        }, randomNumber);
    }
}

function animation(){
    const laptop = id("laptop");
    laptop.classList.add('active');
}

function scrollToElement(num) {
  var element;
  if(num==1){
    element = document.getElementById("projects");
  } else {
    element = document.getElementById("about-me");
  }
  var offset = 130;
  var bodyRect = document.body.getBoundingClientRect().top;
  var elementRect = element.getBoundingClientRect().top;
  var elementPosition = elementRect - bodyRect;
  var offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

if(window.location.href.endsWith("Portfolio/")){
    document.addEventListener('DOMContentLoaded', function() {
        var header = document.querySelector('#header');
        window.addEventListener('scroll', function() {
          var scroll = window.scrollY;
          if (scroll > 0) {
            header.classList.add('drop-shadow');
          } else {
            header.classList.remove('drop-shadow');
          }
        });
        const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
        const body = document.querySelector('body');
        toggleSwitch.addEventListener('change', function() {
          if (this.checked) {
            body.classList.add('dark-mode');
          } else {
            body.classList.remove('dark-mode');
          }
        });
        window.addEventListener('scroll',reveal);
        animation();
        setTimeout(() => {
            helloWorld();
        }, 1300);
        document.getElementById("refresh-link").addEventListener("click", function(){
          location.reload();
        });
        animation();
    });   
    
}



function all(name){
    return document.querySelectorAll(name);
}

function id(name){
    return document.getElementById(name);
}

