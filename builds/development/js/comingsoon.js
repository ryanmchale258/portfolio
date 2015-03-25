$(document).ready(function(){
    $("#ryan").lettering();
    $("#mchale").lettering();
});

(function (){
	// set the date we're counting down to
    var base_url = "http://www.ryanmchale.ca/";

    var target_date = new Date("Nov 30, 2014 23:59").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown = document.getElementById("countdown");
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
        console.log("counting");
        // format countdown string + set tag value
        countdown.innerHTML = days + "d, " + hours + "h, " + minutes + "m, " + seconds + "s";

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

        function resizeme() {
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
        }

        window.addEventListener("resize", resizeme, false);
            
})();