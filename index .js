const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}]

const cheapProduct = itemArray =>{

    let price = itemArray[0].price
    let product = itemArray[0]

   for (const i of itemArray) {

        if (i.price < price) {
            price = i.price
            product = i
        }

   }

   return product
}

console.log(`Cheap product: ${cheapProduct(item).name}`)

const expansiveProduct = itemArray =>{

    let price = itemArray[0].price
    let product = itemArray[0]

   for (const i of itemArray) {

        if (i.price > price) {
            price = i.price
            product = i
        }

   }

   return product
}
console.log(`Expansive Product: ${expansiveProduct(item).name}`)

const productsSum = itemArray =>{

    let sum = 0

   for (const i of itemArray) {   
        sum += i.price
   }

   return sum
}
console.log(`The sum of all Products: ${productsSum(item)}`)

const expensiveProductsSum = itemArray =>{

    let sum = 0

   for (const i of itemArray) {  
        if (i.price > 10) {
            sum += i.price
        } 
        
   }

   return sum
}
console.log(`Sum of expensive products: ${expensiveProductsSum(item)}`)




