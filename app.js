let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let header1 = document.querySelector('header ul li a');

menuToggle.onclick = function(){
    header.classList.toggle('open');
}

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top)
    if(top >= 100){
        header.classList.add('active');
        header1.classList.add('active');
    }else{
      header.classList.remove('active');
      header1.classList.remove('active');
    }
}