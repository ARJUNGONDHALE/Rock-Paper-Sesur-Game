let choise = document.querySelectorAll(".choise");
let msg = document.querySelector(".msg");
let usercount = document.querySelector("#user-score");
let compcount = document.querySelector("#comp-score");

//creating two variable to display scores
let userscore = 0;
let compscore = 0;

//appling for each loop our choises
choise.forEach((choise) => {
  //adding event listener
  choise.addEventListener("click", () => {
    //creat the variable and store the id of choises
    //this is user choise
    const userchoise = choise.getAttribute("id");
    //calling the playgame function
    playgame(userchoise);
  });
});

const playgame = (userchoise) => {
  //caling and storing gancomputerchoise function
  const compchoise = gencompchoise();

  //compairing two variable both are same that time is drow
  if (userchoise === compchoise) {
    drowgame(); //clling drowgame function
  } else {
    let userwin = true; //create a variable that retu8rn user winn value
    if (userchoise === "rock") {
      //user choise is rock that time computer choise is pepar or scissor
      //if user choise is rock and computr choise pepar that time user is los..!
      //if user choise is rock and computr choise scissor that time ser is winn..!
      userwin = compchoise === "pepar" ? false : true;
    } else if (userchoise == "pepar") {
      //user choise is pepar that time computer choise is scissor or rock
      //if user choise is pepar and computr choise scissor that time user is los..!
      //if user choise is pepar and computr choise rock that time ser is winn..!
      userwin = compchoise === "scissor" ? false : true;
    } else {
      //user choise is scissor that time computer choise is rock or pepar
      //if user choise is scissor and computr choise rock that time user is los..!
      //if user choise is scissor and computr choise pepar that time ser is winn..!
      userwin = compchoise === "rock" ? false : true;
    }
    //calling the ahowwinner function
    showwinner(userwin, compchoise, userchoise);
  }
};

const showwinner = (userwin, compchoise, userchoise) => {
  //if user is winn that time if stament is run
  if (userwin) {
    userscore++; //user is win that time score is incris
    usercount.innerText = userscore;
    msg.innerText = `you winn..${userchoise} beats ${compchoise}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++; //computer is win that time else statement is run
    compcount.innerText = compscore;
    msg.innerText = `you loss.. ${compchoise} beats ${userchoise}`;
    msg.style.backgroundColor = "red";
  }
};

const drowgame = () => {
  msg.innerText = "Game is Drow..";
  msg.style.backgroundColor = "#171817";
};

const gencompchoise = () => {
  //storing sting sa a array
  const opthion = ["rock", "pepar", "scissor"];
  //we genret random values using math.random function
  //and store this values randindx variable
  const randinx = Math.floor(Math.random() * 3);
  //opthion is a array and randinx is the index number of this array
  return opthion[randinx];
};
