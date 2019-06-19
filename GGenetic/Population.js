class Population {
    constructor(target, maxPopulation = 40){
        this.persons = []
        this.winner = null
        this.finished = false
        this.generations = 0
        this.matePool = []
        this.target = target
        this.maxPopulation = maxPopulation
    }
    initPopulation(data){
        for(let i=0;i<data.length;i++){
            let pregnancies = parseInt(data[i][0])
            let glucose = parseInt(data[i][1])   
            let bloodPressure = parseInt(data[i][2])
            let skinThickness = parseInt(data[i][3])
            let insulin = parseInt(data[i][4])
            let bmi = round(parseFloat(data[i][5]))
            let diabetesPedigreeF = round(parseFloat(data[i][6]))
            let age = parseInt(data[i][7])
            let outcome = parseInt(data[i][8])
            this.persons[i] = new Person(pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age,outcome)
        }
        filterPersons(this.maxPopulation)
    }
    filterPersons(n){
        let closest = this.persons.map((e)=>{
          e.closeValue = abs(e.fitness - this.targetPerson.fitness)
          return e
        })  
        closest.sort((a,b)=>a.closeValue-b.closeValue)
        this.persons = []
        for(let i = 0; i<n; i++){
          this.persons[i] = closest[i]
        } 
    }
}