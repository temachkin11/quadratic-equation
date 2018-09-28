module.exports = function solveEquation(equation) {
  // your implementation
  
  var a = 0, b = 0, c = 0, D = 0, min = 0, minus = 0, x1 = 0, x2 = 0;
(equation.indexOf("x")); 
a = (equation.slice(0, equation.indexOf("x") - 3)) ;
(equation.lastIndexOf("x"));
c = (equation.substring(equation.lastIndexOf("x") + 4));
min = (equation.substring(equation.lastIndexOf("x") + 2, equation.lastIndexOf("x") + 3));
b = (equation.slice(equation.indexOf("x")+5, equation.lastIndexOf("x")-3));
minus = equation.substring(equation.indexOf("x") + 4, equation.indexOf("x") + 5);
(parseInt(a));
(parseInt(c));
(parseInt(b));
if(minus === "-") {
(b = -b);
}
if (min === "-") {
(c = -c);
}
D = Math.floor(b * b - 4 * a * c);
x1 = Math.round(((-b - (Math.sqrt(D))) / (2 * a)));
x2 = Math.round((- b + (Math.sqrt(D))) / (2 * a));
return [x1, x2].sort((a, b) => a - b);
}
