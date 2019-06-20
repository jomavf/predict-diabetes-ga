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

const ethicalFunction = function () {
	valueBmi = this.value()
	if(valueBmi >= 0 && valueBmi <= 67.1){
		console.log('Es etico')
		isEthical = true
	} else {
		console.log('No es etico')
		isEthical = false
	}
}

const setDOM = function () {
	createDiv('Numero de embarazos')
	inputPregnancies = createInput('');
	inputPregnancies.input(function(){valuePregnancies = this.value()});

	createDiv('Nivel de glucosa')
	inputGlucose = createInput('');
	inputGlucose.input(function(){valueGlucose = this.value()});

	createDiv('Presion de sangre')
	inputBloodPressure = createInput('');
	inputBloodPressure.input(function(){valueBloodPressure = this.value()});

	createDiv('Grosor de piel')
	inputSkinThickness = createInput('');
	inputSkinThickness.input(function(){valueSkinThickness = this.value()});

	createDiv('Nivel de insulina')
	inputInsulin = createInput('');
	inputInsulin.input(function(){valueInsulin = this.value()});

	createDiv('BMI (0 < bmi < 67.1)')
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
	startBtn = createButton('Iniciar algoritmo');
	startBtn.mousePressed(()=>{
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
	})

}