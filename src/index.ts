const username = 'dasomi',
  age = 33,
  gender = 'Female'

const sayHi = (name: string, age: number, gender?: string): string => {
  return `Hi ${name}. You are ${age}. Your sex is ${gender || 'Male'}!!`
}
console.log(sayHi(username, age))