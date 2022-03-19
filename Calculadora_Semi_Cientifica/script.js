function insert(num) {
	var numero = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
	document.getElementById('resultado').innerHTML = "";
}
function back() {
	var resultado = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
	var resultado = document.getElementById('resultado').innerHTML;
	if (resultado) {
		document.getElementById('resultado').innerHTML = eval(resultado);
	}
	else {
		document.getElementById('resultado').innerHTML = "Nada..."
	}
	console.log(numero);
}
function seno() {
	var numero = document.getElementById('resultado').innerHTML;
	var seno = Math.sin(numero);
	console.log(seno);
	document.getElementById('resultado').innerHTML = seno.toFixed(5);
}
function cosseno() {
	var numero = document.getElementById('resultado').innerHTML;
	var cos = Math.cos(numero);
	console.log(cos);
	document.getElementById('resultado').innerHTML = cos.toFixed(5);
}
function tangente() {
	var numero = document.getElementById('resultado').innerHTML;
	var tan = Math.tan(numero);
	console.log(tan);
	document.getElementById('resultado').innerHTML = tan.toFixed(5);
}