class Persona{
    constructor(
        firstName='Juan',
        lastName='Ramirez',
        age=35,
        country='Argentina',
        city='Buenos Aires'){
        this.firstName=firstName,
        this.lastName=lastName,
        this.age=age,
        this.country=country,
        this.city=city,
        this.score=0,
        this.skills=[]
    }

    getFullName(){
        const fullName= this.firstName+' '+ this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
    set setScore(score){
        this.score+=score
    }
    set setSkills(skill){
        this.skills.push(skill)
    }
}
const persona1=new Persona('Juana','Ramirez',35,'Colombia')
const persona2=new Persona('Juan','Ramirez',30,'Argentina')
// console.log(persona1.getFullName());
// console.log(persona1.getScore);
// console.log(persona1.getSkills);
// console.log(persona1);

persona1.setScore=1
persona1.setSkills='HTML'
persona1.setSkills='JavaScript'
persona1.setSkills='CSS'
// console.log(persona1.skills);
// console.log(persona1.score);
// console.log(persona2.skills);
// console.log(persona2.score);

class Student extends Persona {
    saySomething(){
        console.log('Hola a todos yo soy hijo de la Persona, estoy heredando todas sus propiedades');
    }
}

const estudiante1=new Student()
console.log(estudiante1.getFullName());

