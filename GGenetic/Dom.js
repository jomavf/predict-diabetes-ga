var isEthical = false

var inputPregnancies
var inputGlucose
var inputBloodPressure
var inputSkinThickness
var inputInsulin
var inputBmi
var inputDiabetesPedigreeF
var inputAge

var valuePregnancies
var valueGlucose 
var valueBloodPressure 
var valueSkinThickness
var valueInsulin 
var valueBmi 
var valueDiabetesPedigreeF 
var valueAge 

var readDataBtn
var startBtn

// readDataBtn.position(19, 19);
  // readDataBtn.mousePressed(changeBG);

let input = {
  pregnancies:5,
  glucose:120,
  bloodPressure:80,
  skinThickness:30,
  insulin:270,
  bmi:37,
  diabetesPedigreeF:0.5,
  age:28,
}
let div 

const ethicalFunction = function () {
	valueBmi = this.value()
	if (valueBmi == ""){
		document.getElementById('ethical').innerText = ""
	}
	else if(valueBmi >= 0 && valueBmi <= 67.1){
		console.log('Es etico')
		isEthical = true
		// createDiv('<h2 style="color:blue;">Es ético</h2>') 
		document.getElementById('ethical').innerText = ""
		document.getElementById('ethical').innerText = "Es etico"
		// document.getElementById('ethical').style.cssText = '{"color":"red";}'
		div.style("color","blue")
		div.style("margin","1px")
	} else {
		console.log('No es etico')
		isEthical = false
		document.getElementById('ethical').innerText = ""
		document.getElementById('ethical').innerText = "No es etico"
		div.style("color","red")
		div.style("margin","1px")
		// createDiv('<b style="color:red;">No es ético</b>')
	}
}


const setDOM = function () {
	
	
	createDiv('Numero de embarazos')
	inputPregnancies = createInput('');
	inputPregnancies.input(function(){valuePregnancies = this.value()});
	
	createDiv('Nivel de glucosa')
	inputGlucose = createInput('');
	inputGlucose.input(function(){valueGlucose = this.value()});
	
	createDiv('Presion de sangre (mmHg)')
	inputBloodPressure = createInput('');
	inputBloodPressure.input(function(){valueBloodPressure = this.value()});
	
	createDiv('Grosor de piel (mm)')
	inputSkinThickness = createInput('');
	inputSkinThickness.input(function(){valueSkinThickness = this.value()});
	
	createDiv('Nivel de insulina (mU/ml)')
	inputInsulin = createInput('');
	inputInsulin.input(function(){valueInsulin = this.value()});
	
	div = createElement("h2","")
	div.id('ethical')
	createDiv('BMI <b>(0 Kg/h^2 < bmi < 67.1 Kg/h^2)</b>')
	inputBmi = createInput('');

	inputBmi.input(ethicalFunction);
	
	createDiv('Decendencia diabetes')
	inputDiabetesPedigreeF = createInput('');
	inputDiabetesPedigreeF.input(function(){valueDiabetesPedigreeF = this.value()});

	createDiv('Edad')
	inputAge = createInput('');
	inputAge.input(function(){valueAge = this.value()});

	createDiv('<br>')
	readDataBtn = createButton('Cargar datos');
	.class("btn btn-warning")
	readDataBtn.mousePressed(()=>{
		loadData().then(()=>{
			let div = createDiv('Datos cargados correctamente')
			console.log("Datos cargados",data)
			setTimeout(()=>{
				div.style('visibility', 'hidden');
			},2000)
		})
	});

	createDiv(' ')
	validationMessage = createElement("p","")
	validationMessage.id('validMess')

	startBtn = createButton('Iniciar algoritmo');
	startBtn.class("btn btn-primary")
	startBtn.mousePressed(()=>{
		if(isEthical){
			document.getElementById('validMess').innerText = ""
			let p = valuePregnancies
			let g = valueGlucose
			let bp = valueBloodPressure
			let st = valueSkinThickness
			let i = valueInsulin
			let b = valueBmi
			let dpf = valueDiabetesPedigreeF
			let a = valueAge
			console.log('Creando persona... ',p,g,bp,st,i,b,dpf,a)
			createTargetPerson(p,g,bp,st,i,b,dpf,a)
			go = true
		} else {
			document.getElementById('validMess').innerText = "Porfavor ingrese datos validos en el campo BMI"
			validMess.style("color","red")
		}
	})

}