// function constructor car

function  Car(make, model, year, isAvailable){
    this.make = make
    this.model = model
    this.year = year
    this.available = isAvailable
    this.toggleavailability = function(){
        let newisAvaialable = ""
        if(this.isAvailable === true){
            newisAvaialable =false
        }
        else{

            newisAvaialable =true
        }
        return newisAvaialable
    } 
}


function Rental (car, renterName, rentalStartDate, rentalEndDate){
    this.Car = car
    this.renterName = renterName
    this.rentalStartDate = rentalStartDate
    this.rentalEndDate = rentalEndDate
    this.calculateRentalDuration = function(){
        let daysTaken = new Date().getDay - new Date().getDate
        console.log(`${daysTaken} days`)
    }
}


// instance of Car function

let vehicle = new Car("toyota", 'Belta', 2000, true)
console.log(vehicle.make)
console.log(vehicle.toggleavailability())
console.log(vehicle)

// instanceof Rental function
let rentedOne = new Rental("Toyota", "Wambui", new Date().getDate, new Date().getDate)
console.log(rentedOne)

console.log("*************Question2 ****************")

// question class
class Question{
    constructor(text, options, corectAnswer){
        this.text = text
        this.options =options
        this.corectAnswer = corectAnswer      
    }
    checkAnswer= function(answer){
        if (answer === this.corectAnswer){
            return true
        }
        else{
            return false
        }
    }

}

// quiz class

class Quiz{
    constructor(questions, currentsQuestionindex, score){
        this.questions =questions
        this.currentsQuestionindex = currentsQuestionindex
        this.score = score
    }
}
Quiz.prototype.addQuestion = function(question){
    this.questions.push(question)
}
Quiz.prototype.nextQuestion = function(){
    this.currentsQuestionindex +=1
}
let quizOne= new Quiz("How old are you?", 21, 2)
console.log(quizOne)