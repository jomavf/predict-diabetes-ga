let populationLen = 100
let data
let population
let target
let loading
let iteration
let go = false

async function loadData(){
  //load data
  loading = true
  let response = await fetch('assets/diabetes.txt')
  let myData = await response.text()
  data = myData.split("\n").map(e => e.split(","))
  data.shift()
}

function createTargetPerson(p,g,bp,st,i,b,dpf,a){
  // Creating target person
  target = new Person(p,g,bp,st,i,b,dpf,a)
  console.log('Persona creada', target)
}

function setup(){
  iteration = 0
  noCanvas()
  setDOM()
}

function draw(){
  if (go && isEthical) {
    if (iteration === 0){
      // Create new population
      console.log('Creating population')
      population = new Population(target, populationLen)
      // Select top populationLen(100) around target
      population.initPopulation(data)
      console.log('My population',population)
    }
    else if (iteration > 0) {
      //Verify if populationVerify function == "true"
      //End if fitness == 0 or value found repeat 100 times
      population.verify() || population.verifyImprovement() && noLoop()
  
      // Create matingpool
      population.createMatePool()
  
      // Delete worst one - Double best one
      population.improve()
    
      // Crossover one each other
      population.crossoverPopulation()
    
      // Mutate population
      population.mutatePopulation(0.00025)
    
      // Replace  new generation to old generation
      population.replace()
      // console.log(population.persons.length)
      //Print fitness
      population.printFitness()
    }
    iteration+=1
  }
}
