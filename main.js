const mealBtn = document.getElementById("mealBtn");
const currentMeal = document.getElementById("current-meal");
const message = document.getElementById("message");
const mealIdeaBtn = document.getElementById("mealIdeaBtn");


const menu = [
  "Potato soup",
  "Chili",
  "Burgers",
  "Spaghetti",
  "Pizza",
  "Meat loaf",
  "Grilled cheese/mashed potatoes",
  "Beef stew",
  "Roast",
  "Steak",
  "Chicken and Dumpling",
  "Pancakes",
  "Biscuits and gravy",
  "Take Out?"
];

mealBtn.addEventListener("click", () => showMeal(menu));

//show a meal from menu array
function showMeal(menuArray) {
  const randIndex = Math.floor(Math.random() * menuArray.length);
  currentMeal.innerHTML = menuArray[randIndex];
  message.innerHTML = "How about this?";
  message.style.color = "#003b6f";
  console.log(localStorage);
}


//function to add users menu items
mealIdeaBtn.addEventListener("click", () => pushMeal(menu));

function pushMeal() {
  const mealIdea = document.getElementById("mealIdea");
 
  if(mealIdea.value === ""){
    message.innerHTML = "Please Add A Meal";
  } else if(mealIdea.value === "undefined") {
    message.innerHTML = "Something Went Wrong";
  } else {    
    
   store();
   message.innerHTML = `Added ${mealIdea.value}`;
   message.style.color = "#003b6f";
   mealIdea.value = "";
  }
}

//function to store values into menu array
function store(){
   let menuArray = JSON.parse(localStorage.getItem('menu')) || [];
   localStorage.setItem('menuArray', JSON.stringify(menu)); 
   menu.push(mealIdea.value);
   localStorage.setItem('menu', JSON.stringify(menu));
  
   console.log(localStorage);
}
