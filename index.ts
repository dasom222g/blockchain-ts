const username = 'dasomi',
  age = 33,
  general = 'Female'

const sayHi = (name: string, age: number, general: string) => {
  console.log(`Hi ${name}. You are ${age}. Your sex is ${general}!!`)
}
sayHi(username, age, general)

// export { }