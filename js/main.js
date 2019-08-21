const mealBtn = document.getElementById("mealBtn");
const currentMeal = document.getElementById("current-meal");
const message = document.getElementById("message");
const mealIdeaBtn = document.getElementById("mealIdeaBtn");
const input = document.getElementById('mealIdea');
let menu = JSON.parse(localStorage.getItem('menu')) || [];

mealBtn.addEventListener("click", () => showMeal(menu));

//show a meal from menu array
function showMeal(menu) {
    if(menu == ""){
        message.innerHTML = "Please Add an Item";
    } else {
        const randIndex = Math.floor(Math.random() * menu.length);
        currentMeal.innerHTML = menu[randIndex];
        message.innerHTML = "How about this?";
        currentMeal.classList.add("currentMeal-active");
    }
  }


//function to add users menu items
mealIdeaBtn.addEventListener("click", () => pushMeal(menu));

function pushMeal() {
  const mealIdea = document.getElementById("mealIdea");

  if(mealIdea.value === ""){
    message.innerHTML = "Please Add A Meal";
  } else {    

   store();
   message.innerHTML = `Added ${mealIdea.value}`;
   mealIdea.value = "";
  }
}

input.addEventListener('keydown', e => {
  if(e.keyCode === 13){
    e.preventDefault;
    pushMeal();
  }
});

//function to store values into menu array
function store(){
  
    // localStorage.setItem('menuArray', JSON.stringify(menu));
    menu.push(mealIdea.value);
    localStorage.setItem('menu', JSON.stringify(menu));
     
}



