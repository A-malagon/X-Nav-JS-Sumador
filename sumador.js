function adder (operacion, resultado) {
      var oper = document.getElementById(operacion);
      var operandos = oper.innerHTML.split ("+");
      var result = document.getElementById(resultado);
      var primero = parseInt(operandos[0]);
      var segundo = parseInt(operandos[1]);
      var resultData = primero + segundo;
      result.innerHTML = "= " + resultData;
}
function randomAdd (operacion) {
      var operation = document.getElementById(operacion);
      operation.innerHTML = Math.round(Math.random()*1000) + "+" +
                             Math.round(Math.random()*1000)
}
