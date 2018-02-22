document.addEventListener("DOMContentLoaded", function(event){

	var screen = document.getElementById("screen");

	var nums = document.getElementsByClassName("buttonNum");
	var operator = document.getElementsByClassName("operator");
	var equal = document.getElementsByClassName("equals");
	var ac = document.getElementsByClassName("buttonClear");

	var inputs = [];
	var input2 = [];


	for (var i = 0; i < nums.length; i++) {
		nums[i].addEventListener("click", function(event){
			screen.innerHTML = this.innerHTML;
			inputs.push(screen.innerHTML);
			console.log(inputs);
		});
	}

	for (var j = 0; j < operator.length; j++) {
		operator[j].addEventListener("click", function(event){
			screen.innerHTML = this.innerHTML;
			input2.push(this.innerHTML);
			console.log(input2);
		}, {once: true});
	}

	for (var k = 0; k < equal.length; k++) {
		equal[k].addEventListener("click", function(event){
			var val1 = parseInt(inputs[0]);
			var val2 = parseInt(inputs[1]);
			var result = "";
			if(input2 == "*"){
				result = val1 * val2;
			} else if(input2 == "/"){
				result = val1 / val2;
			} else if(input2 == "-"){
				result = val1 - val2;
			} else if(input2 == "+"){
				result = val1 + val2;
			} 
			screen.innerHTML = result;
			console.log(result);
		});
	}

	for (var l = 0; l < equal.length; l++) {
		ac[l].addEventListener("click", function(event){
			inputs = [];
			input2 = [];
			screen.innerHTML = "Sparta Calculator";
		});
	}
});