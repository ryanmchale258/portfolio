(function (){

var base_url = "http://www.ryanmchale.ca/";

var slider = document.querySelector("#projectslider"),
	theslides = document.querySelectorAll(".slide"),
	rowOfSlides = document.querySelector("#slidesrow"),
	count = 0,
	realLink = document.querySelector("#coverlink"),
	buttons = document.querySelectorAll(".sliderbuttons"),
	theWidth;

	theWidth = slider.offsetWidth;
	for(i=0 ; i<theslides.length ; i++) {
		theslides[i].style.width = theWidth + "px";
		if(i == count) {
			var shortName = theslides[i].querySelector("a").href;
			realLink.href = shortName;
		}
	}
	rowOfSlides.style.width = (theWidth * theslides.length) + "px";

	window.addEventListener("resize", function(){
		theWidth = slider.offsetWidth;
		for(i=0 ; i<theslides.length ; i++) {
			theslides[i].style.width = theWidth + "px";
		}
		rowOfSlides.style.width = (theWidth * theslides.length) + "px";
		anim(0);
	});

	var timer = setInterval(function() {
		slide();
	}, 5000);

	function slide() {
		if(count != theslides.length -1) {
			anim(count);
			count++;
		}else{
			anim(0);
		}
	}
	//write function to fire anim dynamically based off click clear interval

	function anim(value) {
			transVal = value * theWidth;
			rowOfSlides.style.webkitTransform = "translateX(-" + transVal + "px)";
			rowOfSlides.style.MozTransform = "translateX(-" + transVal + "px)";
			rowOfSlides.style.msTransform = "translateX(-" + transVal + "px)";
			rowOfSlides.style.OTransform = "translateX(-" + transVal + "px)";
			rowOfSlides.style.transform = "translateX(-" + transVal + "px)";
			for(i=0 ; i<theslides.length ; i++) {
				if(i == value) {
					var shortName = theslides[i].querySelector("a").href;
					realLink.href = shortName;
					buttons[i].classList.add("activeitem");
				}else{
					buttons[i].classList.remove("activeitem");
				}
			}
	}

	for(i=0 ; i < buttons.length ; i++){
		buttons[i].addEventListener("click", function(){
						                          anim(this.id - 1);
						                          clearInterval(timer);
						                     }, false);
	}

})();