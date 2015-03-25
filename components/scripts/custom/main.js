$(document).ready(function(){

var base_url = "http://www.ryanmchale.ca/";

var mobileNav = document.querySelector("#mobnav"),
    navList = mobileNav.querySelector("ul"),
    navFire = document.querySelector("#navbutton"),
    navBtnImg = navFire.querySelector("img"),
    navbar = document.querySelector("#topnav");

    // if(document.documentElement.clientWidth <= 500) {
    //     dumbskrollr.style.height = (curH + 156) + "px";
    // }

    function dropNav() {
        mobileNav.classList.toggle("navdown");
        navList.classList.toggle("shadowed");
        navFire.classList.toggle("colorme");
        navBtnImg.classList.toggle("imgShift");
    }

    $(document).scroll(function() {
        if($(document).scrollTop() >= 50){
            $("#topnav").addClass("scrolledshadow");
            $("#navbutton").addClass("scrolledshadow");
        }else{
            $("#topnav").removeClass("scrolledshadow");
            $("#navbutton").removeClass("scrolledshadow");
        }
        console.log($(document).scrollTop());
    });

    navFire.addEventListener("click", dropNav, false);


});