$(function(){

    base_url = "http://www.ryanmchale.ca/";

    var mobileNav = document.querySelector("#mobnav"),
        navList = mobileNav.querySelector("ul"),
        navFire = document.querySelector("#navbutton"),
        navBtnImg = navFire.querySelector("img"),
        navbar = document.querySelector("#topnav");

        function dropNav() {
            mobileNav.classList.toggle("navdown");
            navList.classList.toggle("shadowed");
            navFire.classList.toggle("colorme");
            navBtnImg.classList.toggle("imgShift");
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