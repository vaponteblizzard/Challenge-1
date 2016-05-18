function print(x) {
	console.log(x);
}
// Write a function called billTotal that can be used to 
// calculate the total to be paid at a restaurant -- 
// including tip and tax -- given the subtotal 
// (i.e. cost of food and drinks). We can assume that the tip 
// will be 15% and tax will be 9.5%. Make sure that the tip 
// does not include the tax!
// return "Your total comes to " + total;
// Hint to get a decimal place of 2 you can use
// Math.round(numberWithDecimal * 100)/100
// i.e. Math.round(15.051102 * 100)/100 becomes 15.05
// billTotal(21.55); // "Your total comes to $26.83"

function billTotal(cost) {
	var tip = cost * 0.15;
	var tax = cost * 0.095;
	var total = cost + tip + tax

	// rounds total to nearest hundredth
	var roundTotal = Math.round(total * 100) / 100;

	return "Your total comes to $" + roundTotal + ".";
}



// Implement the function called animalNoise that accepts two 
// parameters: a type of animal and an emotion that indicates 
// that animal's current emotional state. Based on the 
// combination of animal and emotion, animalNoise should return 
// an appropriate noise (represented as a string). 
// The function should work with at least two different 
// animals and emotions.

// Some ideas include:

// Animals: cat, dog, horse, duck, chicken, cow, human
// Emotions: angry, happy, sad, surprised
// If you're feeling uninspired, feel free to use "smileys" to convey emotion.

function animalNoise(animal, emotion) {
	if ( animal === "dog" ) {
		if ( emotion === "happy" ) {
			return "Woof!";
		}
		if ( emotion === "angry" ) {
			return "Grrr!";
		}
	}
	if ( animal === "cat" ) {
		if ( emotion === "happy" ) {
			return "Meow!";
		}
		if ( emotion === "angry" ) {
			return "Hiss!";
		}
	}
}


// The digital sum of a number is the sum of all its digits, 
// e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7. 
// Use any of the methods of repetition that we have covered so 
// far (no while loops) to implement this function.

// HINTS: Try the following at a console:

// 1337 % 10;
// 133 % 10;
// 13 % 10;
// 1337 / 10;
// Math.floor(1337 / 10);
// Math.floor(133 / 10);
// What should digitalSum of a single-digit number 
// return, e.g. digitalSum(8)?

function digitalSum(num) {
  
  var total = num % 10;

  if ( num >= 10 ) {
    var restOfNum = Math.floor(num / 10);
    total += digitalSum(restOfNum);
  }
  return total;
 }


