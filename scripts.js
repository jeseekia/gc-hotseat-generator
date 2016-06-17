//Generate a random number between 1 and 4 inclusive
function getRandom(){
	return Math.floor(Math.random()*4) + 1;
}

//Image to be generated randomly
var $luckyWinner = $("#luckyWinner");

//Button to control the random person generator
var $button = $("button");

//Array to keep track of the most recent selectionNumber for random person generator
var choices = [];


var delay=1000; //1 second

var selectionNumber;

//Last selectionNumber for comparing random
var lastSelectionNumber = choices[choices.length-2];

//2nd to last selectionNumber for comparing random
var secondLastSelectionNumber = choices[choices.length-3];




$button.click(function(){
  event.preventDefault;
  //Play choosing sound

	//Delay picture selection by 1 second
	setTimeout(function() {
		//Play selection sound
	  getRandomPerson();
		console.log(choices);
	}, delay);

});



//The most hacked function ever. Still needs debugging!
function getRandomPerson() {

//first selection choices.length = 0
if (choices.length = 0) {
	selectionNumber = getRandom();
	choices.push(selectionNumber);
	console.log(selectionNumber);
}
//second selection choices.length = 1
else if (choices.length=1) {
	do {
		selectionNumber = getRandom();
		choices.push(selectionNumber);
		console.log(selectionNumber);
	} while (choices[choices.length-2]===selectionNumber);
}

//third selection choices.length = 2
else// if (choices.length=2)
{
	do {
		selectionNumber = getRandom();
		choices.push(selectionNumber);
		console.log(selectionNumber);
	} while (choices[choices.length-3]===selectionNumber);
}


//second selection choices.length = 3+
// else {
//
// }







  switch (selectionNumber) {
    case 1:
        $luckyWinner.attr("src", "images/tammie.jpg");
      break;

    case 2:
        $luckyWinner.attr("src", "images/kyle.jpg");
      break;

    case 3:
        $luckyWinner.attr("src", "images/william.jpg");
      break;

    case 4:
        $luckyWinner.attr("src", "images/all-the-interns.jpg");
      break;

    default:
        $luckyWinner.attr("src", "images/grant.jpeg");
  }
  console.log($luckyWinner.attr("src"));
}
