let data

function preload(){
  txt = loadStrings('assets/diabetes.txt',(data)=>{
    data = data
  })
}

function setup(){
  console.log(data)
  let person1 = new Person(123,23,43,56,32,65,78,11,1)  
  let person2 = new Person(122,20,40,50,30,64,76,10,1)
  console.log(person1,person2)
  let child = person1.crossover(person2)
  child.mutate()
  
}

function draw(){

}