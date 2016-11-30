var i = 1;
$(document).ready(function() {
	$('#section1').find('h5').first().hide();
	$('#section1').find('p').first().hide();
	$('#section0').find('p').first().hide();
	$('#navigation-pane').hide();
	$('#section0').find('h5').first().hide();
    $('#section0').find('button').last().hide();
    $('#animation-container').hide();
    $('#section0').hide();
      $('#fullpage').fullpage({
        verticalCentered: false,
        css3:false,
        afterLoad: function(anchorLink, index){
        	if(index == 2){
				$('#section1').find('h5').first().fadeIn(1000);
				$('#section1').find('p').first().fadeIn(1000);
        	}
        	if(index == 1){
        		$('#section0').fadeIn(1000, function () {
        			$('#navigation-pane').fadeIn(1800, function () {
	        			$('#section0').find('p').first().fadeIn(1000);
	        			$('#section0').find('h5').first().fadeIn(1000);
	        			$('#section0').find('button').last().fadeIn(1000);
	        			$('#animation-container').show();
	        			var picture1 = document.getElementById('picture1');
						var myVar = setInterval(myTimer, 100);
						function myTimer() {
						    picture1.src = 'assets/img/img1/smartphone_000'+ i +'.png'
						    i++;
						    if (i > 29) {
						    	myStopFunction();
						    	i = 30;
						    }
						}

						function myStopFunction() {
						    clearInterval(myVar);
						}
        			});
        		});

        	}
        }
      });
      $('.slider').slider({full_width: true});
    });