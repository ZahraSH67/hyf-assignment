let userName = "";
let todoList = [];

function getReply(command) {
  //Welcome to the user
  if (command.startsWith("Hello my name is")) {
    const name = command.slice(17).trim();
    if (userName === name) {
      return `You already told me your name is ${name}`;
    }
    userName = name;
    return `Nice to meet you ${name}`;
  }

  //Tell the user's name
  if (command === "What is my name") {
    if (!userName) {
      return "You haven't told me your name yet.";
    }
    return `Your name is ${userName}`;
  }

  //Add item to todoList(Static code only for fishing)
  // if(command === "Add fishing to my todo"){
  //     todoList.push("fishing")
  //     return ("fishing added to your todo");
  // }

  //Add item to todoList(Static code only for singing in the shower)
  // if(command === "Add singing in the shower to my todo"){
  //     todoArr.push("singing in the shower")
  //     return todoArr
  // }

  //Add item to todoList(Dynamic code)
  if (command.startsWith("Add")) {
    const item = command.slice(4, command.indexOf("to my todo")).trim();
    todoList.push(item);
    return `${item} added to your todo`;
  }

  //Remove item from todoList(Static code only for fishing)
  // if(command === "Remove fishing from my todo"){
  //     todoArr.shift()
  //     return todoArr
  // }

  //Remove item form todoList(Dynamic code)
  if (command.startsWith("Remove")) {
    const item = command.slice(7, command.indexOf("from my todo")).trim();
    const index = todoList.indexOf(item);
    if (index !== -1) {
      todoList.splice(index, 1);
      return `Removed ${item} from your todo`;
    }
    return `${item} is not in your todo`;
  }

  //Display elements of todoList
  if (command === "What is on my todo?") {
    return `You have ${todoList.length} todos: ${todoList.join(" and ")}`;
  }

  //Today's Date
  if (command === "What day is it today?") {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const dayTaker = date.getDate();
    const monthTaker = months[date.getMonth()];
    const yearTaker = date.getFullYear();
    return `${dayTaker} of ${monthTaker} ${yearTaker}`;
  }

  //Calculation
  if (command.startsWith("what is")) {
    const parts = command.slice(8).split(" ");
    const num1 = Number(parts[0]);
    const operator = parts[1];
    const num2 = Number(parts[2]);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  }

  //  Static TimeOut code for 4 minutes
  // if (command === "Set a timer for 4 minutes") {
  //     setTimeout(function () {
  //         console.log("Timer done");
  //     }, 4 * 60 * 1000); // 240000 ms

  //     return "Timer set for 4 minutes";
  // }

  //Dynamic TimeOut Code
  if (command.startsWith("Set a timer for")) {
    const time = Number(command.slice(16, command.indexOf("minutes")).trim());
    setTimeout(function () {
      console.log("Timer done");
    }, time * 60 * 1000);
    return ` Timer set for ${time} minutes`;
  }

  return "I didn't understand that command.";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add dancing to my todo"));
console.log(getReply("Remove singing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("How old are you?"));



// link to my codeWars profile
//https://www.codewars.com/users/ZahraSH67