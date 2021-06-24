function userInput() {
    let input = event.target.innerText;
    console.log(input);
    printValue(input);
}

let buttons = document.getElementsByTagName("button"); //Select all calc buttons

console.log(buttons.length);

for (var i = 0; i < buttons.length; i++) { //Loop to give buttons functionality.

	buttons[i].setAttribute("onclick", "userInput()");
}

function printValue(value) {

	let out = document.querySelector(".display");
	let curr = out.innerHTML;

	if (out.innerHTML == "0") {

		if (value != "C" && value != "+/-" && value != "%") {	//Cases where all non "C" buttons are used

			out.innerHTML = "";
			out.innerHTML += value;	
		}
	}

	else {

		if (value == "C") {	//This button clears the display

			console.log(curr[curr.length-1]);
			out.innerText = curr.slice(0, -1);

			if (out.innerHTML.length <= 1) {

				out.innerHTML = "0";
			}
		}

		if (value != "C" && value != "=" && value != "+/-" && value != "%") {

			out.innerHTML += value;
		}

		if (value == "=") {

			let result = out.innerHTML;
			out.innerHTML = eval(result);	//eval() converts the math into string to be displayed
		}

		if (value == "C") {	//Handles functionality the clear button

			out.innerHTML = "0";
		}

		if (value == "+/-") {	//Handles pos/neg signs
			
			let num = Number.parseInt(out);	//Output on calc is a string, so must be turned into an int first
			out.innerHTML *= -1;
		}

		if (value == "%") {	//Turns numbers into decimals

			let num = Number.parseInt(out);
			out.innerHTML *= 0.01;
		}
	}
}