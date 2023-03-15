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