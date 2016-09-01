
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
var game =function(){
		var computerNumber = Math.float((Math.random() *100)+1);//step 1

		 var userGuess = function(){//step 2
		 	var entry = +$('input[type= "text"]').val();//Entry Variabledeclared
		 	/*----Feedback--*/
		 	var feedback = function(computerNumber,entry){
		 		var guessEntry=0;
		 		guessObject = $('#count'),
		 		guessList = $('guessList');
		 		guessNumber++;
		 		guessObject.text(guessNumber);
		 		guessList.append('<li>' + entry +'</li>');
		 		$ ('input[type="text"]')val("";
		 			//clear text)
		 		};
		 		if (computerNumber == entry){
		 			feedbackObject.text("you guessed it ");
		 			guessEntry(entry);
		 		} else if ((computerNumber - 5) < entry && entry < (computerNumber + 5)) { /*HOT*/
                feedbackObject.text("You are HOT!");
                guessEntry(entry);
            } else if ((computerNumber - 10) < entry && entry < (computerNumber + 10)) { /*WARM*/
                feedbackObject.text("Getting WARM!");
                guessEntry(entry);
            } else if ((computerNumber - 17) < entry && entry < (computerNumber + 17)) { /*COOL*/
                feedbackObject.text("Aren't you COOL!");
                guessEntry(entry);
            } else if ((computerNumber - 30) < entry && entry < (computerNumber + 30)) { /*COLD*/
                feedbackObject.text("Uh oh! You're COLD as ice!");
                guessEntry(entry);
            } else { /*Too far*/
                feedbackObject.text("Bad news! You couldn't be farther!");
                guessEntry(entry);
            }
        };

        /*-------- Step 3 --------*/
        if (1 <= entry && entry <= 100) {
            $('.game').on('click', '.button', function () {
                feedback(computerNumber, entry);
            });
            $('#userGuess').on('keypress', function (e) {
                if (e.key === 82) {
                    feedback(computerNumber, entry);
                }
            });
        } else if (0 > entry || entry > 250) {
            feedbackObject.text("Very clever! Try a number between 1-100");
        } else {
            feedbackObject.text("Oops! Try a number between 1-100");
        }


    };

    /*----Step Five-----*/
    $('.new').click(function () {
        game();
    });

    };
		 	}

		 }

	}
})


