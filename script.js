function getFullName(firstName = "John", surname = "Smith", useFormalName = false, gender = "") {
   if (!firstName || !surname) {
        return "Error: Please provide both first name and surname.";
    }
    if (useFormalName === true) {
        if (gender === "Male") {
            return "Lord " + firstName + " " + surname;
        } else if (gender === "Female") {
            return "Lady " + firstName + " " + surname;
        } else {
            return "Lord " + firstName + " " + surname; // Default 
        }
    }
    return firstName + " " + surname;
}

const fullName1 = getFullName("Zahra", "Shahabi", true, "Female");
console.log(fullName1);

const fullName2 = getFullName("Emma", "Watson");
console.log(fullName2);

const fullName3 = getFullName("Benjamin", "Hughes", true, "Male");
console.log(fullName3);

const fullName4 = getFullName("Benjamin", "Hughes", false);
console.log(fullName4);

const fullName5 = getFullName("", "");
console.log(fullName5); // Should show error message
const fullName6 = getFullName();
console.log(fullName6); 





weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function getEventWeekday(eventDay){
    const todayDate = new Date;
    const todayDay = todayDate.getDay();
    console.log(todayDay)
    const eventDayIndex = (todayDay + eventDay) % 7;
    return weekDays[eventDayIndex];
}


console.log(getEventWeekday(9));
console.log(getEventWeekday(4)); 


function todayClothes(temp){
    if (temp <= 0) {
        return "Wear a jacket, hat, and gloves. It's very cold!";
    } else if (temp <= 15) {
        return "Wear a light coat.";
    } else if (temp <= 22) {
        return "Wear jeans and a t-shirt.";
    } else {
        return "Wear shorts and a t-shirt.";
    }
}
const clothesSuggestion =todayClothes(18);
console.log(clothesSuggestion);




const class07Students = [];

function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("You cannot add an empty string to a class.");
        return;
    }
 
    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
    }
  

    if (studentName === "Queen Margarite") {
        class07Students.push(studentName);
        return;
    }


    if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
        return;
    }
    class07Students.push(studentName);
}



function getNumberOfStudents() {
    return class07Students.length;
}


addStudentToClass("Jim");
addStudentToClass("Albert");
addStudentToClass("Joe");
addStudentToClass("Sarah");
addStudentToClass("Tommy");
addStudentToClass("Luna");
addStudentToClass("Joe");
addStudentToClass("");
addStudentToClass("Queen Margarite");
addStudentToClass("Jonas"); 

console.log(class07Students); 
console.log(getNumberOfStudents()); 