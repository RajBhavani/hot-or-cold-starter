$(document).ready(function(){

	var guessArray = new Array();

// Generate the random number//

function generate()
{
	var trump = Math.floor((Math.random()*100)+1);
	console.log("Secret Number is" + ":" + trump);
	Secret = trump;
	return Secret;

}
// Call generate function
generate();

// Read userguess number on guess button click
$("#guessButton").on("click",function(event)
{
	var userGuess = $("#userGuess").val();
	//alert(userGuess);
	event.preventDefault();

	checkNum(userGuess);

	//Push to guess list
	guessArray.push(userGuess);

	var counter = $("#guessList li").length;
	$("#count").text (counter);
	$("#userGuess").val(""); // Empty User Guess Field
 
});


//Compare the userguess with random number//
function checkNum(userGuess) {

	var diff = Secret - userGuess;
	diff = Math.abs(diff);
	console.log(diff);
	if(isNaN(userGuess))
	{
		$("#feedback").text("please enter a valid number between 1 and 100");

	}
	//Last Guess
	if ($.inArray(userGuess, guessArray) < 0) 
		{
			// Verify valid user entry
			if (userGuess > 0 && userGuess <= 100 && userGuess % 1 === 0 &&  !isNaN(userGuess))

			{
				$("#guessList").prepend("<li>" + userGuess); //Guess list is ready
				
				if (diff === 0)
				{
					$("#feedback").text("You won the game!");
				}
				else if (diff < 10)
				{
					$("#feedback").text("Hot");

				}
				else if (diff < 25)
				{
					$("#feedback").text("lukewarm");
				}
				else if (diff < 50)
				{
					$("#feedback").text("Cold");
				}
				else if (diff < 75)
				{
					$("#feedback").text("Freezing");
				}

				}	
			else 
			{
				$("#feedback").text("Please try between 1 and 100");
			}
        }
	else
	{
		$("#feedback").text("You guessed this number already. Please try another number!");
	}        
    
	

	
}


// New Game//
$('.new').click(function(){
	generate();
	guessArray = new Array();
	$("#count").text(0);
	$('#guessList li').remove();
	$('#feedback').text("Make your Guess");

});


/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});




});
