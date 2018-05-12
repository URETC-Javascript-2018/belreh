// console.log("hi");
// var cars = [
//     {
//         type: 'chevy'
//         year: 2008
//     },
//     {
//         type: 'mustang'
//         year: 2000
//     },
//     {
//         type: 'viper'
//         year: 1999
//     },
//     {
//         type: 'jeep'
//         year: 2015
//     }
// ]
//
//
//
// // Use .filter() to replace the following for loop.
//
// var newCars = cars.filter()
//
// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }

// }
// console.log(newCars)
// ENDD HERE
console.log("hi")

var shoppingCart = [
    {
        item: 'apples',
        cost: 2
    },
    {
        item: 'oranges',
        cost: 5
    },
    {
        item: 'eggs',
        cost: 10
    },
    {
        item: 'snickers',
        cost: 2.5
    },
    {
        item: 'bread',
        cost: 2.33
    },
    {
        item: 'cheese',
        cost: 4.33
    }
]

function total(arr) {
   var shoppingTotal = arr.reduce(function(final, item){
     // here is what is said to add all the cost together
     return final += item.cost
     // we have to start with 0 for final and add each array

   }, 0)
   return shoppingTotal;
}


console.log(total(shoppingCart))
