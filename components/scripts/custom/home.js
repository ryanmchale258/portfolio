homeScript = function(){

    var juggleTag = document.querySelector("#juggleBox"),
    	currentTag = juggleTag.querySelector(".current"),
    	currentP = currentTag.querySelector("p"),
    	nextTag = juggleTag.querySelector(".next"),
    	nextP = nextTag.querySelector("p");
    	theHeight = juggleTag.offsetHeight,
    	tags = ["Designer", "Developer", "Coffee Receptacle"],
    	count = 0,
        topoffset = 0;

    currentP.innerHTML = tags[0];
    nextP.innerHTML = tags[1];
    currentTag.style.top = "0px";
    nextTag.style.top = theHeight + "px";

    window.addEventListener("resize", function(){
    	theHeight = juggleTag.offsetHeight;
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

    function resizeChanges(){
            var mq = window.matchMedia( "(min-width: 960px)" );

            if (mq.matches) {
                topoffset = 46;
            }
        }

        resizeChanges();

        $(window).resize(function(){
            resizeChanges();
        });

        $(window).scroll(function(){
            var windowpos = $(window).scrollTop() + topoffset;
            $('#topnav li a').removeClass('active');

            if (windowpos > $('#bio').offset().top){
                $('#topnav li a').removeClass('active');
                $('a[href$="#bio"]').addClass('active');
            }

            if (windowpos > $('#work').offset().top){
                $('#topnav li a').removeClass('active');
                $('a[href$="#work"]').addClass('active');
            }

            if (windowpos > $('#contact').offset().top){
                $('#topnav li a').removeClass('active');
                $('a[href$="#contact"]').addClass('active');
            }
        }); 

      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - topoffset
            }, 500);
            return false;
          }
        }
      });


};