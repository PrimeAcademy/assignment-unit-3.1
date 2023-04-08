console.log("****** Array Practice *******");

// 1. Creating arrays
console.log("--- 1. Practice creating arrays ---");

// Example: Array of animals
let animalArray = ["fish", "cat", "bird", "dog"];
console.log("Animals are: ", animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ["ribeye", "mussels", "raspberry pie"];

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above
console.log(`My favorite foods are ${favoriteFoods}`);

// 2. Array.length - tells you how many items are in the array
console.log("--- 2. Length of an array ---");

// Example: How many animals are in the array?
console.log("Number of animals:", animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log("Number of foods are: ", favoriteFoods.length);

// 3. Accessing array items
console.log("--- 3. Accessing items in an array ---");

// Example: Log the first animal from the array using it's array index
console.log("First animal is", animalArray[0]);

// 3.a. TODO: Log the second animal in the array
console.log(animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index
console.log(animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item
console.log(animalArray[animalArray.length - 1]);

// 4. Adding & Removing Array Items
console.log("--- 4. Adding and removing array items ---");

// Example: Add an animal to the end using Array.push
animalArray.push("penguin");
console.log("Added an animal to end,", animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push("Tacos");
console.log("Added tacos to end", favoriteFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log("Removed the last animal", removedAnimal);
console.log("The animals are now", animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedFood = favoriteFoods.pop();
console.log("Removed the last food", removedFood);
console.log("The foods are now", favoriteFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift("walrus");
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift("Tacos");
console.log(`Added Tacos at the beginning of the array`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log("Removed the first animal", removedAnimal);
console.log("The animals are now", animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
removedFood = favoriteFoods.shift();
console.log("Removed the first food", removedFood);
console.log("The foods are now", favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
favoriteFoods[1] = "Sushi";

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
const reverseFoods = favoriteFoods
  .map((food) => food.toLowerCase())
  .sort()
  .reverse();
console.log(reverseFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

// title case function > "raspberry pie" => "Raspberry Pie"

const toTitleCase = (string) => {
  const words = string.trim().split(" ");
  const titleWords = words.map((word) => {
    const trimmedWord = word.trim();
    return trimmedWord[0].toUpperCase() + trimmedWord.slice(1).toLowerCase();
  });

  return titleWords.join(" ");
};

const titleFavoriteFoods = favoriteFoods.map((food) => toTitleCase(food));
let foodString = `My favorite foods are: ${titleFavoriteFoods.join(" and ")}`;
console.log(foodString);

// 4.h (STRETCH) TODO: Make a new array that combines
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

const animalFoods = [...favoriteFoods, ...animalArray];
console.log(animalFoods);
