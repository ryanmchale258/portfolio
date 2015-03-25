$(document).ready(function(){

var $nameRyan = $("#ryan"),
	$nameMchale = $("#mchale");

	$nameRyan.arctext({radius: 400});
	$nameMchale.arctext({radius: 400, dir: -1});

	var letters = document.querySelectorAll("h1 span");

		for(i=0 ; i<letters.length ; i++){
		var theTransform = (letters[i].style.webkitTransform || 
							letters[i].style.MozTransform || 
							letters[i].style.transform),
			transY = theTransform.split(") "),
			yValue = transY[1].split("("),
			yPx = yValue[1].split("px"),
			curY = parseInt(yPx[0]),
			newY = curY + (Math.floor(Math.random() * 300) + 100);
			startPoint = "transform: " + transY[0] + ") translateY(" + curY +  "px) " + transY[2] + "; opacity: 1";
			endPoint = "transform: " + transY[0] + ") translateY(-" + newY +  "px) " + transY[2] + "; opacity: 0";

		console.log(newY);

			letters[i].setAttribute("data-anchor-target", "#hero");
			letters[i].setAttribute("data-top", startPoint);
			letters[i].setAttribute("data--300-top", endPoint);
		var matrix = letters[i].style.transform;

		}


	$('#thanks').lettering();

	var thanks = document.querySelectorAll("#thanks span");

	for(i=0 ; i < 11 ; i++) {
		thanks[i].style.display = "inline-block";
		thanks[i].setAttribute("data-anchor-target", "#hero");
		thanks[i].setAttribute("data-top", "transform[sqrt]: translateY(" + (Math.floor(Math.random() * 500) + 100) + "px); opacity: 0;");
		thanks[i].setAttribute("data--1200-top", "transform[sqrt]: translateY(0px); opacity: 1;");
	}

	for(i=12 ; i < thanks.length ; i++) {
		thanks[i].style.display = "inline-block";
		thanks[i].classList.add("makesinkini");
		thanks[i].setAttribute("data-anchor-target", "#hero");
		thanks[i].setAttribute("data--1300-top", "transform[sqrt]: translateX(800px); opacity: 0;");
		thanks[i].setAttribute("data--1500-top", "transform[sqrt]: translateY(0px); opacity: 1;");
	}

	for(i=0 ; i < thanks.length ; i++) {
		thanks[i].setAttribute("data--1800-top", "transform[sqrt]: translateY(0px); opacity: 1;");
		thanks[i].setAttribute("data--2000-top", "transform[sqrt]: translateY(-" + (Math.floor(Math.random() * 300) + 100) + "px); opacity: 0;");
	}


	$('#waslittle').lettering();

	var waslittle = document.querySelectorAll("#waslittle span");

var increment = 2100;

	for(i=0 ; i < 4 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(1000px) translateY(0px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 400;

	for(i=4 ; i < 6 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(1000px) translateY(0px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 400;

	for(i=6 ; i < 10 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(1000px) translateY(0px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 400;

	for(i=10 ; i < 18 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].classList.add("makechunk");
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(0px) translateY(-500px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 800;

	for(i=18 ; i < 29 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(1000px) translateY(0px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

	for(i=29 ; i < 33 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(0px) translateY(-500px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

	for(i=33 ; i < 38 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(0px) translateY(500px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

	for(i=38 ; i < 41 ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(0px) translateY(-500px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

	for(i=41 ; i < waslittle.length ; i++) {
		waslittle[i].style.display = "inline-block";
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--1900-top", "transform[sqrt]: translateX(0px) translateY(500px) rotate(0deg); opacity: 0;");
		waslittle[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

$('#creative').lettering();

	var creative = document.querySelectorAll("#creative span");

	for(i=0 ; i < 2 ; i++) {
		creative[i].style.display = "inline-block";
		creative[i].classList.add("makesinkin");
		creative[i].setAttribute("data-anchor-target", "#hero");
		creative[i].setAttribute("data--6000-top", "transform[sqrt]: translateY(500px) translateX(0px) rotate(0deg); opacity: 0;");
		creative[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateY(0px) translateX(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

	for(i=2 ; i < 10 ; i++) {
		creative[i].style.display = "inline-block";
		creative[i].classList.add("bigger");
		creative[i].setAttribute("data-anchor-target", "#hero");
		creative[i].setAttribute("data--6000-top", "transform[sqrt]: translateY(" + (Math.floor(Math.random() * 500) + 100) + "px) translateX(" + (Math.floor(Math.random() * 500) + 100) + "px) rotate(0deg); opacity: 0;");
		creative[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateY(0px) translateX(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 600;

	for(i=10 ; i < 14 ; i++) {
		creative[i].style.display = "inline-block";
		creative[i].classList.add("makesinkin");
		creative[i].setAttribute("data-anchor-target", "#hero");
		creative[i].setAttribute("data--6000-top", "transform[sqrt]: translateX(500px) translateY(0px) rotate(0deg); opacity: 0;");
		creative[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
	}

	increment = increment + 1000;

	creative[14].style.display = "inline-block";
	creative[14].setAttribute("data-anchor-target", "#hero");
	creative[14].setAttribute("data--8000-top", "font-size[bounce]: 6rem; transform[bounce]: translateY(-50px) translateX(0px) rotate(0deg); opacity: 0;");
	creative[14].setAttribute("data--" + increment + "-top", "font-size[bounce]: 3rem; transform[bounce]: translateY(0px) translateX(0px) rotate(0deg); opacity: 1;");

	increment = increment + 1000;

	for(i=0 ; i < creative.length ; i++) {
		creative[i].setAttribute("data-anchor-target", "#hero");
		creative[i].setAttribute("data--11000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
		creative[i].setAttribute("data--12000-top", "transform[sqrt]: translateX(" + (Math.floor(Math.random() * 360) + 1) + "px) translateY(" + (Math.floor(Math.random() * 360) + 1) + "px) rotate(" + (Math.floor(Math.random() * 360) + 1) + "deg); opacity: 0;");
	}

	for(i=0 ; i < waslittle.length ; i++) {
		waslittle[i].setAttribute("data-anchor-target", "#hero");
		waslittle[i].setAttribute("data--10000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg); opacity: 1;");
		waslittle[i].setAttribute("data--12000-top", "transform[sqrt]: translateX(" + (Math.floor(Math.random() * 360) + 1) + "px) translateY(" + (Math.floor(Math.random() * 360) + 1) + "px) rotate(" + (Math.floor(Math.random() * 360) + 1) + "deg); opacity: 0;");
	}

$('#gotbigger').lettering();

	var gotbigger = document.querySelectorAll("#gotbigger span")

	for(i=0 ; i < gotbigger.length ; i++) {
		gotbigger[i].style.display = "inline-block";
		gotbigger[i].setAttribute("data-anchor-target", "#hero");
		gotbigger[i].setAttribute("data--9500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); font-size[bounce]: .1rem; opacity: 0;");
		gotbigger[i].setAttribute("data--10500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); font-size[bounce]: 3rem; opacity: 1;");
	}

	increment = 11900;

$('#triedthings').lettering();

	var triedthings = document.querySelectorAll("#triedthings span");

	for(i=0 ; i < 2 ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--11300-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

	increment = increment + 400;

	for(i=2 ; i < 7 ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--11300-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

	increment = increment + 400;

	for(i=7 ; i < 9 ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--11300-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

	increment = increment + 400;

	for(i=9 ; i < 13 ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--11300-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

	increment = increment + 400;

	for(i=13 ; i < 23 ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--11300-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

	increment = increment + 400;

	for(i=23 ; i < triedthings.length ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--11300-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

	increment = increment + 400;

$('#acting').lettering();

	var acting = document.querySelectorAll("#acting span");

	for(i=0 ; i < 7 ; i++) {
		acting[i].style.visibility = "hidden";
	}

	for(i=15 ; i < acting.length ; i++) {
		acting[i].style.visibility = "hidden";
	}

	for(i=7 ; i < triedthings.length ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--14000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		triedthings[i].setAttribute("data--14400-top", "transform[sqrt]: translateX(0px) translateY(100px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=7 ; i < acting.length ; i++) {
		acting[i].style.display = "inline-block";
		acting[i].setAttribute("data-anchor-target", "#hero");
		acting[i].setAttribute("data--14000-top", "transform[sqrt]: translateX(0px) translateY(-100px) rotate(0deg) scale(1, 1); opacity: 0;");
		acting[i].setAttribute("data--14400-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

$('#music').lettering();

	var music = document.querySelectorAll("#music span");

	for(i=0 ; i < 7 ; i++) {
		music[i].style.visibility = "hidden";
	}

	for(i=14 ; i < music.length ; i++) {
		music[i].style.visibility = "hidden";
	}

	for(i=7 ; i < acting.length ; i++) {
		acting[i].style.display = "inline-block";
		acting[i].setAttribute("data-anchor-target", "#hero");
		acting[i].setAttribute("data--14800-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		acting[i].setAttribute("data--15200-top", "transform[sqrt]: translateX(0px) translateY(100px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=7 ; i < music.length ; i++) {
		music[i].style.display = "inline-block";
		music[i].setAttribute("data-anchor-target", "#hero");
		music[i].setAttribute("data--14800-top", "transform[sqrt]: translateX(0px) translateY(-100px) rotate(0deg) scale(1, 1); opacity: 0;");
		music[i].setAttribute("data--15200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

$('#writing').lettering();

	var writing = document.querySelectorAll("#writing span");

	for(i=0 ; i < 7 ; i++) {
		writing[i].style.visibility = "hidden";
	}

	for(i=16 ; i < writing.length ; i++) {
		writing[i].style.visibility = "hidden";
	}

	for(i=7 ; i < music.length ; i++) {
		music[i].style.display = "inline-block";
		music[i].setAttribute("data-anchor-target", "#hero");
		music[i].setAttribute("data--15600-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		music[i].setAttribute("data--16000-top", "transform[sqrt]: translateX(0px) translateY(100px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=7 ; i < writing.length ; i++) {
		writing[i].style.display = "inline-block";
		writing[i].setAttribute("data-anchor-target", "#hero");
		writing[i].setAttribute("data--15600-top", "transform[sqrt]: translateX(0px) translateY(-100px) rotate(0deg) scale(1, 1); opacity: 0;");
		writing[i].setAttribute("data--16000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

$('#art').lettering();

	var art = document.querySelectorAll("#art span");

	for(i=0 ; i < 7 ; i++) {
		art[i].style.visibility = "hidden";
	}

	for(i=12 ; i < art.length ; i++) {
		art[i].style.visibility = "hidden";
	}

	for(i=7 ; i < writing.length ; i++) {
		writing[i].style.display = "inline-block";
		writing[i].setAttribute("data-anchor-target", "#hero");
		writing[i].setAttribute("data--16400-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		writing[i].setAttribute("data--16800-top", "transform[sqrt]: translateX(0px) translateY(100px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=7 ; i < art.length ; i++) {
		art[i].style.display = "inline-block";
		art[i].setAttribute("data-anchor-target", "#hero");
		art[i].setAttribute("data--16400-top", "transform[sqrt]: translateX(0px) translateY(-100px) rotate(0deg) scale(1, 1); opacity: 0;");
		art[i].setAttribute("data--16800-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
	}

increment = 16800 + 800;

	for(i=0 ; i < gotbigger.length ; i++) {
		gotbigger[i].style.display = "inline-block";
		gotbigger[i].setAttribute("data-anchor-target", "#hero");
		gotbigger[i].setAttribute("data--17200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); font-size[bounce]: 3rem; opacity: 1;");
		gotbigger[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(-100px) rotate(0deg) scale(1, 1); font-size[bounce]: 3rem; opacity: 0;");
	}

	for(i=0 ; i < 7 ; i++) {
		triedthings[i].style.display = "inline-block";
		triedthings[i].setAttribute("data-anchor-target", "#hero");
		triedthings[i].setAttribute("data--17200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		triedthings[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(100px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=7 ; i < art.length ; i++) {
		art[i].style.display = "inline-block";
		art[i].setAttribute("data-anchor-target", "#hero");
		art[i].setAttribute("data--17200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		art[i].setAttribute("data--" + increment + "-top", "transform[sqrt]: translateX(0px) translateY(100px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

$('#nothing').lettering();

	var nothing = document.querySelectorAll("#nothing span");

	for(i=0 ; i < 7 ; i++) {
		nothing[i].classList.add("makechunk");
		nothing[i].style.fontSize = "7rem";
		nothing[i].style.display = "inline-block";
		nothing[i].setAttribute("data-anchor-target", "#hero");
		nothing[i].setAttribute("data--17600-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		nothing[i].setAttribute("data--18000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20100-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20700-top", "transform[sqrt]: translateX(500px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=8 ; i < 14 ; i++) {
		nothing[i].style.display = "inline-block";
		nothing[i].setAttribute("data-anchor-target", "#hero");
		nothing[i].setAttribute("data--18200-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		nothing[i].setAttribute("data--18600-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20100-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20700-top", "transform[sqrt]: translateX(-500px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=14 ; i < 17 ; i++) {
		nothing[i].style.display = "inline-block";
		nothing[i].setAttribute("data-anchor-target", "#hero");
		nothing[i].setAttribute("data--18400-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		nothing[i].setAttribute("data--19000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20100-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20700-top", "transform[sqrt]: translateX(500px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=17 ; i < nothing.length ; i++) {
		nothing[i].classList.add("makesinkini");
		nothing[i].style.fontSize = "6rem";
		nothing[i].setAttribute("data-anchor-target", "#hero");
		nothing[i].setAttribute("data--19200-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		nothing[i].setAttribute("data--19600-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20100-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		nothing[i].setAttribute("data--20700-top", "transform[sqrt]: translateX(0px) translateY(-500px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

$('#always').lettering();

	var always = document.querySelectorAll("#always span");

	for(i=0 ; i < 4 ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--21200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=4 ; i < 7 ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--21600-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=7 ; i < 13 ; i++) {
		always[i].style.display = "inline-block";
		always[i].classList.add("makechunk");
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--22000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=13 ; i < 17 ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--22400-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=17 ; i < 21 ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--22800-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=21 ; i < 23 ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--23200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=23 ; i < 28 ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--23600-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=28 ; i < always.length ; i++) {
		always[i].style.display = "inline-block";
		always[i].setAttribute("data-anchor-target", "#hero");
		always[i].setAttribute("data--20800-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		always[i].setAttribute("data--24000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		always[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

$('#internet').lettering();

	var internet = document.querySelectorAll("#internet span");

	for(i=0 ; i < 2 ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--24800-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=2 ; i < 9 ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--25200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=9 ; i < 12 ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--25600-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=12 ; i < 16 ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--26000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=16 ; i < 25 ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].classList.add("makechunk");
		internet[i].classList.add("bigger");
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(-300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--26400-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=25 ; i < 29 ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--26800-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

	for(i=29 ; i < internet.length ; i++) {
		internet[i].style.display = "inline-block";
		internet[i].setAttribute("data-anchor-target", "#hero");
		internet[i].setAttribute("data--24400-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
		internet[i].setAttribute("data--27200-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); opacity: 1;");
		internet[i].setAttribute("data--30000-top", "transform[sqrt]: translateX(0px) translateY(300px) rotate(0deg) scale(1, 1); opacity: 0;");
	}

$('#sexy').lettering();

	var sexy = document.querySelectorAll("#sexy span");

	for(i=0 ; i < 4 ; i++) {
		sexy[i].style.display = "inline-block";
		sexy[i].setAttribute("data-anchor-target", "#hero");
		sexy[i].setAttribute("data--28600-top", "transform[sqrt]: translateX(" + (Math.floor(Math.random() * 150) + 100) + "px) translateY(-" + (Math.floor(Math.random() * 150) + 100) + "px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 0;");
		sexy[i].setAttribute("data--28900-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 1;");
		sexy[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 1;");
		sexy[i].setAttribute("data--29900-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 6rem; opacity: 0;");
	}

	for(i=4 ; i < 13 ; i++) {
		sexy[i].style.display = "inline-block";
		sexy[i].classList.add("makechunk");
		sexy[i].setAttribute("data-anchor-target", "#hero");
		sexy[i].setAttribute("data--28600-top", "transform[sqrt]: translateX(" + (Math.floor(Math.random() * 150) + 100) + "px) translateY(-" + (Math.floor(Math.random() * 150) + 100) + "px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 0;");
		sexy[i].setAttribute("data--28900-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 1;");
		sexy[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 1;");
		sexy[i].setAttribute("data--29900-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 6rem; opacity: 0;");
	}

	for(i=13 ; i < sexy.length ; i++) {
		sexy[i].style.display = "inline-block";
		sexy[i].setAttribute("data-anchor-target", "#hero");
		sexy[i].setAttribute("data--28600-top", "transform[sqrt]: translateX(" + (Math.floor(Math.random() * 150) + 100) + "px) translateY(-" + (Math.floor(Math.random() * 150) + 100) + "px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 0;");
		sexy[i].setAttribute("data--28900-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 1;");
		sexy[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 2rem; opacity: 1;");
		sexy[i].setAttribute("data--29900-top", "transform[sqrt]: translateX(0px) translateY(150px) rotate(0deg) scale(1, 1); font-size: 6rem; opacity: 0;");
	}

$('#hire').lettering();

	var hire = document.querySelectorAll("#hire span");

	for(i=0 ; i < 6 ; i++) {
		hire[i].style.display = "inline-block";
		hire[i].setAttribute("data-anchor-target", "#hero");
		hire[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(" + (Math.floor(Math.random() * 300) + 1) + "px) rotate(0deg) scale(1, 1); font-size: 5rem; opacity: 0;");
		hire[i].setAttribute("data--31000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); font-size: 5rem; opacity: 1;");
	}

	for(i=6 ; i < 8 ; i++) {
		hire[i].style.display = "inline-block";
		hire[i].setAttribute("data-anchor-target", "#hero");
		hire[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(" + (Math.floor(Math.random() * 300) + 1) + "px) rotate(0deg) scale(1, 1); font-size: 5rem; opacity: 0;");
		hire[i].setAttribute("data--31000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); font-size: 5rem; opacity: 1;");
	}

	for(i=8 ; i < hire.length ; i++) {
		hire[i].style.display = "inline-block";
		hire[i].classList.add("makesinkini");
		hire[i].setAttribute("data-anchor-target", "#hero");
		hire[i].setAttribute("data--29500-top", "transform[sqrt]: translateX(0px) translateY(" + (Math.floor(Math.random() * 300) + 1) + "px) rotate(0deg) scale(1, 1); font-size: 5rem; opacity: 0;");
		hire[i].setAttribute("data--31000-top", "transform[sqrt]: translateX(0px) translateY(0px) rotate(0deg) scale(1, 1); font-size: 5rem; opacity: 1;");
	}


	var s = skrollr.init({
		skrollrBody: 'hero',
		render: function(data){
			console.log(data.curTop);
		},
		 easing: {
        //This easing will sure drive you crazy
        wtf: Math.random,
        inverted: function(p) {
            return 1 - p;
        }
    }
	});

});










