window.addEventListener('load', adicionando_eventos)


function adicionando_eventos(){
	var buscar = document.getElementById('buscar')
	buscar.addEventListener('click', buscando)
}


//itens inicias(marca e ano)

var marca = document.getElementById('marca')
var ano = document.getElementById('ano')

 let carros = ["Aston Martin", "Audi", "Bentley", "BMW", "BMW Motorrad", "BYD", "Caoa Chery", "Chevrolet", "Chryster", "Citroën", "Dogde", "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Jac", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lifan", "Maserati", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Peugeot", "Porshe", "Ram", "Renault", "Royal Enfield", "Subaru", "Suzuki", "Toyota", "Triumph", "Troller", "Volkswagen", "Volvo", "Yamaha"]


var c1 = 0

while (c1 != carros.length){
	let add_opt = document.createElement('option');
	add_opt.innerHTML = `${carros[c1]}`
	marca.appendChild(add_opt)
	c1++
}

var c2 = 1990;

while (c2 <= 2022){
	let add_opt = document.createElement('option');
	add_opt.innerHTML = `${c2}`
	ano.appendChild(add_opt)
	c2++
}

//Button buscar

function buscando(){
	alert('funcionando')
}
