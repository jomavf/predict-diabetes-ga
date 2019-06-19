let populationLen = 100
let data
let population
let target
let go = false

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

async function setup(){
  // Creating target person
  target = new Person(input.pregnancies,input.glucose,input.bloodPressure,input.skinThickness,input.insulin,input.bmi,input.diabetesPedigreeF,input.age)
  //format data
  let response = await fetch('assets/diabetes.txt')
  let myData = await response.text()
  data = myData.split("\n").map(e => e.split(","))
  data.shift()
  
  // Create new population
  population = new Population(target, populationLen)
  // Select top populationLen(100) around target
  population.initPopulation(data)

  go = true
}

async function draw(){
  if (go) {
    //Verify if populationVerify function == "true"
    //End if fitness == 0 or value found repeat 100 times
    population.verify() && population.verifyImprovement() && noLoop()

    // Create matingpool
    population.createMatePool()

    // Delete worst one - Double best one
    population.improve()
  
    // Crossover one each other
    population.crossoverPopulation()
  
    // Mutate population
    population.mutatePopulation(0.05)
  
    // Replace  new generation to old generation
    population.replace()
    // console.log(population.persons.length)
    //Print fitness
    population.printFitness()
  }
}
