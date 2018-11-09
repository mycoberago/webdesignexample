var cright = document.getElementById('cright');
var today = new Date();
cright.innerHTML = today.getFullYear();

var quoteGenerator = document.getElementById('quote-generator');

quoteGenerator.onmouseover = function() {
  quoteGenerator.innerHTML = "Quote Generator";
}
quoteGenerator.onmouseout = function() {
  quoteGenerator.innerHTML = "";
}

var calculator = document.getElementById('calculator');

calculator.onmouseover = function() {
  calculator.innerHTML = "JS Calculator";
}
calculator.onmouseout = function() {
  calculator.innerHTML = "";
}