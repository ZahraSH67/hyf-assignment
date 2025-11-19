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





const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function arrivalTime(information) {
  const travelTime = information.destinationDistance / information.speed; // in hours

  const hours = Math.floor(travelTime);
  const minutes = Math.round((travelTime - hours) * 60); // convert decimal hours to minutes

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = arrivalTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes