
//lista para la selección de palabras
let myList = ["No lo se",
				"No tienes suerte",
				"Hoy no trabajo",
				"Mañana te atropellan"
]

// captura de variable a boton
let button = document.getElementsByTagName("button")[0]

// creacion de numero random
function getRandomnum(max){
	return Math.floor(Math.random()*max) + 1
}

//detectar actividad del botón
button.addEventListener("click", function() {

//crear numero al azar entre 1 - 4
let randNum = getRandomnum(4)
// selección de numero e IF correspondiente
if(randNum === 1){
	document.getElementById("first").innerHTML = (myList[0])
} else if(randNum === 2){
	document.getElementById("first").innerHTML = (myList[1])
} else if(randNum === 3){
	document.getElementById("first").innerHTML = (myList[2])
} else if(randNum === 4){
	document.getElementById("first").innerHTML = (myList[3])
}

})






































