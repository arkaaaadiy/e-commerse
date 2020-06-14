/**
 * @see http://marak.github.io/faker.js/
 */
const fs = require('fs')
const path = require('path')
const faker = require('faker')

const arrImage = [
  "https://i.ibb.co/dm9VB9Y/image2.png",
"https://i.ibb.co/Bjdvg05/image3.png",
"https://i.ibb.co/6wcq5RX/image4.png",
"https://i.ibb.co/k4fN27J/image5.png",
"https://i.ibb.co/2cr2VD6/photo1.png",
"https://i.ibb.co/KG4PDKM/photo2.png",
"https://i.ibb.co/tsJPry1/photo3.png",
"https://i.ibb.co/Jc8bCDb/photo4.png",
]

const runNTimes = (count = 1) => funcToRun => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(funcToRun())
  }
  return result
}
const getRandomNumber = count => Math.floor(Math.random() * count)
const generateUUID = () => faker.fake('{{random.uuid}}')

const generateProductItem = () => {
  return {   
        id: generateUUID(), 
        name: faker.fake('{{commerce.productName}}'),
        brand: 'Mango',
        category: faker.fake('{{commerce.product}}'),
        subcategory: 'tops',
        photo: faker.random.arrayElement(arrImage),
        size: ['XS', 'S', 'M', 'L', 'XL'],
        color: faker.fake('{{commerce.color}}'),
        price: +faker.fake('{{commerce.price}}'),
        rating: getRandomNumber(5),
        voises: getRandomNumber(15),
        newItem: faker.fake('{{random.boolean}}'),
        soldOut: false,
        discont: faker.fake('{{random.arrayElement([0, 20, 30])}}'),    
  }
}


const product = runNTimes(10)(generateProductItem)

// const generateUser = () => {
//   return {
//     id: generateUUID(),
//     avatar: faker.fake('{{image.avatar}}'),
//     name: faker.fake('{{name.lastName}}, {{name.firstName}}'),
//     email: faker.fake('{{internet.email}}'),
//     password: faker.fake('{{internet.password}}'),
//     phoneNumber: faker.fake('{{phone.phoneNumber}}'),
//   }
// }

// const users = runNTimes(10)(generateUser)

// const generateProfile = () => {
//   return {
//     ...(users[getRandomNumber(10)]),
//     favorites: [
//       catalog[getRandomNumber(10)].id,
//       catalog[getRandomNumber(10)].id,
//     ],
//   }
// }

const data = {
  product,
//   users,
//   profile: runNTimes(1)(generateProfile),
}

fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data))