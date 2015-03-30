$(function(){

    base_url = "http://www.ryanmchale.ca/";

    var mobileNav = document.querySelector("#mobnav"),
        navList = mobileNav.querySelector("ul"),
        navFire = document.querySelector("#navbutton"),
        mobItems = document.querySelectorAll('#mobnav a'),
        navBtnImg = navFire.querySelector("img"),
        navbar = document.querySelector("#topnav");

        function dropNav() {
            mobileNav.classList.toggle("navdown");
            navList.classList.toggle("shadowed");
            navFire.classList.toggle("colorme");
            navBtnImg.classList.toggle("imgShift");
        }

        for(i = 0 ; i < mobItems.length ; i++){
            mobItems[i].addEventListener("click", dropNav, false);
        }

        navFire.addEventListener("click", dropNav, false);   


    var controller = new ScrollMagic.Controller({
        globalSceneOptions : {
            triggerHook : "onLeave"
        }
    });

    var pin = new ScrollMagic.Scene({
        triggerElement : "#topnav"
    }).setPin("#topnav", {pushFollowers: false});

    pin.setClassToggle("#topnav", "stuck");

    controller.addScene(pin);

});