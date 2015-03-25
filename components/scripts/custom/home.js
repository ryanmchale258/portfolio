$(document).ready(function(){

    $("#ryan").lettering();
    $("#mchale").lettering();

var base_url = "http://www.ryanmchale.ca/";

var logo = document.querySelector("#logo"),
	juggleTag = document.querySelector("#juggleBox"),
	currentTag = juggleTag.querySelector(".current"),
	currentP = currentTag.querySelector("p"),
	nextTag = juggleTag.querySelector(".next"),
	nextP = nextTag.querySelector("p");
	theHeight = juggleTag.offsetHeight,
	tags = ["Designer", "Developer", "Coffee Receptacle"],
	count = 0;

currentP.innerHTML = tags[0];
nextP.innerHTML = tags[1];
currentTag.style.top = "0px";
nextTag.style.top = theHeight + "px";

window.addEventListener("resize", function(){
	theHeight = juggleTag.offsetHeight;
});

if(document.documentElement.clientWidth <= 500) {
    logo.src = (base_url + "images/logo.svg");
    if(logo.classList.contains("desktop")){
        logo.classList.remove("desktop");
        logo.classList.add("mobile");
    }
}else{
    logo.src = (base_url + "images/icon.svg");
    if(logo.classList.contains("mobile")){
        logo.classList.remove("mobile");
        logo.classList.add("desktop");
    }
}

window.addEventListener("resize", function(){
    if(document.documentElement.clientWidth <= 500) {
        logo.src = (base_url + "images/logo.svg");
        if(logo.classList.contains("desktop")){
            logo.classList.remove("desktop");
            logo.classList.add("mobile");
        }
    }else{
        logo.src = (base_url + "images/icon.svg");
        if(logo.classList.contains("mobile")){
            logo.classList.remove("mobile");
            logo.classList.add("desktop");
        }
    }
});

setInterval(function() {

        currentTag.style.top = "-" + theHeight + "px";
        nextTag.style.top = "0px";

        if(count >= tags.length -1){
            count = 0;
        }else{
            count++;
        }

        nextP.innerHTML = tags[count];

        nextTag.classList.remove("next");
        nextTag.classList.add("current"); // shuffles the next tag up to current

        setTimeout(function(){
            juggleTag.removeChild(currentTag); // gets rid of the old current tag

            currentTag = juggleTag.querySelector(".current"); //selects the new current tag

            if(count >= tags.length -1){
                count = 0;
            }else{
                count++;
            }

            nextTag = document.createElement("div");
        var p = document.createElement("p");
            nextTag.appendChild(p);
            nextTag.classList.add("next");
            nextTag.classList.add("tag");
            nextTag.style.top = theHeight + "px";
        var t = document.createTextNode(tags[count]);
            p.appendChild(t);
            juggleTag.appendChild(nextTag);
        }, 500);

}, 1500);


});