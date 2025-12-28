var typed2 = new Typed('.text', {
    strings:['Student --','Developer --','Resercher --','Freelancer --'],
    typeSpeed:100,
    backSpeed:100,
    cursorchar:'',
    loop:true
});
var typed2 = new Typed('.self_text', {
    strings:['Back-End Web Developer --','Data Analyst --','Quantitative Analyst --'],
    typeSpeed:100,
    backSpeed:100,
    cursorchar:'',
    loop:true
});

let bar = document.querySelector('.bars');
let side_bar = document.querySelector(".side_bar");

bar.addEventListener('click',()=>{
    side_bar.classList.toggle("show_side_bar");
});