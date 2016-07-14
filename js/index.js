var numberString = '';

// Get the element, add a click listener...
document.getElementById("calculatorpad").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "BUTTON") {
		console.log("Button ", e.target.id, " was clicked!");
    if(e.target.textContent == 'C') {
      console.log('Clear');
      numberString = '';
      e.stopPropagation();
    } else if(e.target.textContent == '=') {
      mathEvaluate();
    } else {
      numberString += e.target.textContent;
    }
    console.log(numberString);
    document.getElementById("MyOutput").value= numberString;
  }
});


var mathEvaluate = function() {
    var myRe = /([\+\-]?)(\d+)/g;
    var result;
    var operand = '+';
    var number = 0;
    var total = 0;
  
    while(result=myRe.exec(numberString)) {
      console.log('String is ' + numberString);
      console.log('Result is ' + result);
      console.log('input is ' + result.input);
      console.log(result[0]);
      console.log('Found: ' + result[1] + ' and ' + result[2]);
       switch(result[1]) {
         case '':
         case '+':
           total = +total + +result[2];
           break;
         case '-':
           total = +total - +result[2];
           break;
       }
      console.log('Total: ' + total);
    }
  document.getElementById("result").innerHTML = total;
}