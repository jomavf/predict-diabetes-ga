class Person {
    constructor (pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age,outcome=0) {
        this.dna = null
        this.fitness = 0
        this.score = 0
        this.calculateFitness(pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age)
        this.initBinary(pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age,outcome)
    }

    initBinary(pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age,outcome){
        pregnancies = fillArray(dec2bin(pregnancies),maxLenPregnancies)
        glucose = fillArray(dec2bin(glucose),maxLenGlucose)
        bloodPressure = fillArray(dec2bin(bloodPressure),maxLenBloodPressure)
        skinThickness = fillArray(dec2bin(skinThickness),maxLenSkinThickness)
        insulin = fillArray(dec2bin(insulin),maxLenInsulin)
        bmi = fillArray(dec2bin(bmi),maxLenBmi)
        diabetesPedigreeF = fillArray(dec2bin(diabetesPedigreeF),maxLenDiabetesPedigreeF)
        age = fillArray(dec2bin(age),maxLenAge)
        outcome = fillArray(dec2bin(outcome),maxLenOutcome)
        this.dna = {
            pregnancies,
            glucose,
            bloodPressure,
            skinThickness,
            insulin,
            bmi,
            diabetesPedigreeF,
            age,
            outcome
        }
    }

    calculateFitness(pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age){
        this.fitness = calculateHeuristic(pregnancies,glucose,bloodPressure,skinThickness,insulin,bmi,diabetesPedigreeF,age)
    }

    calculateScore(target){
        this.score = abs(target.fitness - this.fitness)
    }

    crossover(otherPerson){
        let newDna = {}
        let att = ["pregnancies","glucose","bloodPressure","skinThickness","insulin","bmi","diabetesPedigreeF","age","outcome"]
        for(let i = 0; i<att.length; i++){
            newDna[att[i]] = this.dna[att[i]]
            let randomPoint = floor(random(0,newDna[att[i]].length))
            let election = random()>=0.5 ? "first" : "last"
            replaceElements(newDna[att[i]],otherPerson.dna[att[i]],randomPoint,election) 
        }
        newDna.outcome = this.dna.outcome
        for(let i = 0; i < att.length; i++) {
            newDna[att[i]] = bin2dec(newDna[att[i]])
        }
        let person = new Person(newDna.pregnancies,newDna.glucose,newDna.bloodPressure,
            newDna.skinThickness,newDna.insulin,newDna.bmi,newDna.diabetesPedigreeF,
            newDna.age,newDna.outcome)
        return person
    }

    mutate(mutationRate = 0.2){
        let att = ["pregnancies","glucose","bloodPressure","skinThickness","insulin","bmi","diabetesPedigreeF","age","outcome"]
        for(let i = 0; i<att.length; i++){
            if(att['outcome']){
                let randomPoint = floor(random(floor(this.dna[att[i]].length/2),this.dna[att[i]].length))
                if(0.000125>=random()){
                    this.dna[att[i]][randomPoint] === 0 ? (this.dna[att[i]][randomPoint]=1) : (this.dna[att[i]][randomPoint]=0)
                }
            }else{
                let randomPoint = floor(random(floor(this.dna[att[i]].length/2),this.dna[att[i]].length))
                // let randomPoint = floor(random(floor(3*this.dna[att[i]].length/4),this.dna[att[i]].length))
                if(mutationRate>=random()){
                    this.dna[att[i]][randomPoint] === 0 ? (this.dna[att[i]][randomPoint]=1) : (this.dna[att[i]][randomPoint]=0)
                }
            }
        }
    }
    
}