var picture1 = document.getElementById('picture1');

var i = 1;
var myVar = setInterval(myTimer, 100);
function myTimer() {
    picture1.src = 'assets/img/img1/smartphone_000'+ i +'.png'
    i++;
    if (i == 30) {myStopFunction();}
}

function myStopFunction() {
    clearInterval(myVar);
}

// $(function () { // wait for document ready
// 	// init
// 	var controller = new ScrollMagic.Controller({
// 		globalSceneOptions: {
// 			triggerHook: 'onLeave'
// 		}
// 	});

// 	// get all slides
// 	var slides = document.querySelectorAll("section.panel");

// 	// create scene for every slide
// 	for (var i=0; i<slides.length; i++) {
// 		new ScrollMagic.Scene({
// 				triggerElement: slides[i]
// 			})
// 			.setPin(slides[i])
// 			.addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);
// 	}
// });