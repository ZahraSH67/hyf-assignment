function getFullName(firstName = "John", surname = "Smith", useFormalName = false, gender = "") {
 
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