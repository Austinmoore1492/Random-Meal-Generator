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
function showMeal(menu) {
  const randIndex = Math.floor(Math.random() * menu.length);
  currentMeal.innerHTML = menu[randIndex];
  message.innerHTML = "How about this?";
  message.style.color = "#003b6f";
}


mealIdeaBtn.addEventListener("click", () => pushMeal(menu));

function pushMeal() {
  const mealIdea = document.getElementById("mealIdea");
 
  if(mealIdea.value === ""){
    message.innerHTML = "Please Add A Meal";
  } else {
   menu.push(mealIdea.value);
   localStorage.setItem('menu', JSON.stringify(menu));
    
   message.innerHTML = `Added ${mealIdea.value}`;
   message.style.color = "#003b6f";
   mealIdea.value = "";
  }
}
