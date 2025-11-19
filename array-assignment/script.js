const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
const nameIndex = names.indexOf(nameToRemove)
    console.log(nameIndex)
    if(nameIndex !== -1){
        names.splice(nameIndex, 1);
    }
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']



