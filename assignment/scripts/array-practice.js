console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['cracked black pepper', 'bread (austrian, rye)', 'spicy mustard', 'bratwurst'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('Some of my favorite foods:', favoriteFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of favorite foods:', favoriteFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using its array index 
console.log('Last animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Last animal is', animalArray[animalArray.length-1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push('plain yogurt and honey');
console.log('Added a food to my favorites,', favoriteFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
removedFood = favoriteFoods.pop();
console.log('Removed the last food:', removedFood);
console.log('The foods are now:', favoriteFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('shrimp and grits');
console.log('Added a food to the beginning:', favoriteFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = favoriteFoods.shift();
console.log('Removed the first food', removedFood);
console.log('The foods are now', favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

/* found appropriate usage of .splice here:
https://stackoverflow.com/a/586189
=> modified to replace rather than insert
 */
favoriteFoods.splice(
    1, // the index at which to splice
    1, // number of elements to remove
    'italian bread' // first element to insert
)
console.log('Replaced bread type', favoriteFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
favoriteFoods.sort();
console.log('Sorted foods:', favoriteFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
foodString = favoriteFoods.join(' and ');
console.log('Food string:', foodString);
/*
Worked to figure out how to put commas in the right places.
Imitated regex usage from here:
https://stackoverflow.com/a/28673744
No oxford comma, because I couldn't figure out a nice way of including it.
*/
foodString = foodString.replace(/ and(?=.* and)/g, ',');
console.log('Food string:', foodString);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
let exoticFoodArray = favoriteFoods.concat(animalArray);
console.log('A list with some exotic food choices', exoticFoodArray);