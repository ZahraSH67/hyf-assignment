const nameInput = document.getElementById("nameInput");
const assignBtn = document.getElementById("assignBtn");
const retryBtn = document.getElementById("retryBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const houseDescriptions = {
  Gryffindor: "Brave, daring, and bold.",
  Hufflepuff: "Loyal, patient, and fair.",
  Ravenclaw: "Wise, creative, and clever.",
  Slytherin: "Ambitious, cunning, and resourceful."
};

let currentName = ""; 

function getRandomHouse() {
  return houses[Math.floor(Math.random() * houses.length)];
}

function showHouse(name) {
  const house = getRandomHouse();
  result.textContent = `${name} belongs in ${house}! ${houseDescriptions[house]}`;
}

assignBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    error.textContent = "Please enter your name first!";
    return;
  }

  error.textContent = "";
  currentName = name;     
  showHouse(currentName);
  retryBtn.disabled = false; 
});

retryBtn.addEventListener("click", () => {
  if (currentName === "") return;
  showHouse(currentName); 
});




//  Katas on CodeWars:
// https://www.codewars.com/users/ZahraSH67












