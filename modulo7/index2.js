const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle.length) // {length: 20, width: 20}
  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    'isMarried': false,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
      },
      'phone number': '+3584545454545'
  }
  console.log(person);
  
  person.nationality = 'Ethiopian'
  person.country = 'Bolivia'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
console.log('PERSONA 2');

  console.log(person);
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1) //[HTML','CSS',....] => 'HTML, CSS, ' 
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
  console.log(person.getPersonInfo())

  const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

//   let personCopy=person
//   personCopy.isMarried=false
//   console.log(personCopy);
//   console.log(person);

  
const copyPerson = Object.assign({}, person)
copyPerson.isMarried=true
console.log(copyPerson)
console.log(person);
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
const values = Object.values(copyPerson)
console.log(values)
const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))  
console.log(copyPerson.hasOwnProperty('address'))  