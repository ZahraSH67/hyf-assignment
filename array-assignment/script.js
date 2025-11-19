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




const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 17,
    minutes: 48,
  },
  {
    title: "Dark",
    days: 0,
    hours: 21,
    minutes: 40,
  },
  {
    title: "Friends",
    days: 7,
    hours: 10,
    minutes: 24,
  },
];

function logOutSeriesText(seriesDurations){
    const lifeMinutes = 80 * 365 * 24 * 60; //Lifetime in minutes
    let totalPercentage = 0;
    for(let i = 0; i < seriesDurations.length; i++){
        const series = seriesDurations[i];
        const seriesMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;

        // calculate percentage of life
        const percentage = (seriesMinutes / lifeMinutes) * 100;
        totalPercentage += percentage;
        console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
    }

  console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
}
logOutSeriesText(seriesDurations)






const notes = [];
function saveNote(content, id){
    notes.push(({content, id}))
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);





function getNote(id) {
     if (id === undefined || isNaN(id)) {
    console.log("Error: id must be a number");
    return;
    }

    for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
    console.log("Error: Note not found");
}
const firstNote = getNote(1);
console.log(firstNote); 



function logOutNotesFormatted(){
     for(let i = 0; i < notes.length; i++){
        const savedNotes = notes[i]
       console.log(`The note with id: ${savedNotes.id}, has the following note text: ${savedNotes.content}`)
}
}
logOutNotesFormatted()
