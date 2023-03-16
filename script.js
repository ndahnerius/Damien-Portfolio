var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for (tablink of tablinks){
            tablink.classList.remove('active-link');
        }
        for (tabcontent of tabcontents){
            tabcontent.classList.remove('active-tab');
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    

    window.addEventListener('scroll', function(){
        const header = document.querySelector('nav');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    function openmenu(){
        const sidemenu = document.getElementById('sidemenu')
        sidemenu.style.right = '0'
    }
    function closemenu(){
        const sidemenu = document.getElementById('sidemenu')
        sidemenu.style.right = '-200px'
    }


    // Reaveal Elements on scroll bottom to top
    window.addEventListener('scroll', reveal);
    function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Reveal Element on Scroll left to right
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

$(document).ready(function(){
    // backto top button
    // check to see if window is top if not then display button 
    $(window).scroll(function(){

        if($(this).scrollTop() > 100){
            $(".backtop-btn").fadeIn();
        }else{
            $(".backtop-btn").fadeOut();
        }
    })
    // click to go back to top
   $(".backtop-btn").on("click", function(){
        $("html").animate({scrollTop: 0});
   })
});