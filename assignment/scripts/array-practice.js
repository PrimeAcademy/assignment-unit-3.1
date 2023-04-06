// console.log('****** Array Practice *******');

// // 1. Creating arrays
// console.log('--- 1. Practice creating arrays ---');

// // Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
// console.log('Animals are: ', animalArray);

// // 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['Cheeseburger', 'Lava Cakes', 'Pizza', "Chocolate Strawberries"];

// // 1.b. TODO: Log your array of foods to the console with a message, similar 
// //      to the example above

console.log('My Favorite Foods are: ', favoriteFoods);

// // 2. Array.length - tells you how many items are in the array
// console.log('--- 2. Length of an array ---');
// // Example: How many animals are in the array? 
// console.log('Number of animals:', animalArray.length);

// // 2.a. TODO: Log to the console the number of foods in your array
console.log('The number of favorite foods: ', favoriteFoods.length);


// // 3. Accessing array items
// console.log('--- 3. Accessing items in an array ---');

// // Example: Log the first animal from the array using it's array index
// console.log('First animal is', animalArray[0])

// // 3.a. TODO: Log the second animal in the array 
console.log(favoriteFoods[1]);

// // 3.b. TODO: Log the last animal in the array using it's array index 
console.log('The last favorite food is', favoriteFoods[3]);


// // 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
// //      instead of the exact index number of the last item
console.log(favoriteFoods[favoriteFoods.length-1]);


// // 4. Adding & Removing Array Items
// console.log('--- 4. Adding and removing array items ---');

// // Example: Add an animal to the end using Array.push
// animalArray.push('penguin');
// console.log('Added an animal to end,', animalArray);

// // 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push('Pecan Pie');
console.log(favoriteFoods);


// // Example: Remove the last animal by using Array.pop
// let removedAnimal = animalArray.pop();
// console.log('Removed the last animal', removedAnimal);
// console.log('The animals are now', animalArray);

// // 4.b. TODO: Remove the food at the end of your array & 
// //      log both the food removed and the updated array
removedFoods = favoriteFoods.pop();
console.log(removedFoods);

// // Example: Add an animal to the beginning using Array.unshift
// animalArray.unshift('walrus');
// console.log(`Added an animal to beginning: ${animalArray}`);

// // 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('Cream Cheese Wontons');
console.log(favoriteFoods);
// // Example: Remove the first animal using Array.shift
// removedAnimal = animalArray.shift();
// console.log('Removed the first animal', removedAnimal);
// console.log('The animals are now', animalArray);

// // 4.d TODO: Remove the food at the beginning of your array & 
// //     log both the food removed and the updated array
firstRemovedFood = favoriteFoods.shift();
console.log(firstRemovedFood);
// // 4.e (STRETCH) TODO: Replace the second food in your array
// //      with another one of your favorite foods.
// //      Then log the updated array.

for (let i of favoriteFoods){
    if(i === favoriteFoods.length-2, favoriteFoods[1]==('Crab Legs'));
console.log(i)
}

// // 4.f (STRETCH) TODO: Sort your favoriteFoods array
// //     in reverse alphabetical order. Log the array.
favoriteFoods.sort();
favoriteFoods.reverse();
console.log(favoriteFoods);

// // 4.g (STRETCH) TODO: Convert your array to a string
// //     putting the word "and" between each item.
// //     eg "tacos and pizza and pasta". Log the string.

// use array method join
console.log(favoriteFoods.join(' and '));

// // 4.h (STRETCH) TODO: Make a new array that combines 
// //     the favorite foods array with the animals array.
// //     Then log the new array.
// //     It should look something like:
// //     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

let animal= favoriteFoods.concat(animalArray);

console.log(animal)
