const username = 'dasomi',
  age = 33,
  gender = 'Female'

// const sayHi = (name: string, age: number, gender?: string): string => {
//   return `Hi ${name}. You are ${age}. Your gender is ${gender || 'Male'}!!`
// }
// console.log(sayHi(username, age, gender))

// interface

interface Human {
  name: string
  age: number
  gender: string
  double(age: number): number
}

const person = {
  name: 'dasomi',
  age: 33,
  gender: 'Female',
  double: (age: number) => {
    return age * 2
  }
}

const sayHi = (data: Human): string => {
  const { name, age, gender } = data
  console.log('double: ', data.double(age))
  return `Hi ${name}. You are ${age}. Your gender is ${gender}!!`
}
// console.log(sayHi(person))

// class
class Human2 {
  private name: string
  public readonly age: number
  public gender: string
  public double(): number {
    return this.age * 2
  }
  constructor(name: string, age: number, gender: string) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  public getInfo(): string {
    return `Hi ${this.name}. You are ${this.age}. Your gender is ${this.gender}!!`
  }
}

const dasom = new Human2("dasomi", 33, "Female")
console.log(dasom.getInfo())

