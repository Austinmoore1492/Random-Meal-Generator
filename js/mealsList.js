document.addEventListener('DOMContentLoaded', showMeal);


//show a meal from menu array
function showMeal() {
  const results = document.getElementById("results");
  let menu = ["chicken", "burgers", "stew", "White Chicken Chili", "spaghetti"];
  let output = '<div id="card-body">';
  menu.forEach(item => {
    output += `<div class="card">
                 <h3>${item}</h3>
                 <button class="btnDelete">X</button>
               </div>`;
  });
  output += '</div>';
  results.innerHTML = output;
}





document.addEventListener('DOMContentLoaded', () => {
const card = document.querySelector('#card-body');
card.addEventListener("click", removeItem);

//Delete item
function removeItem(e) {
console.log('click');
  if (e.target.classList.contains("btnDelete")) {
    if (confirm("Are You Sure You Want To Delete This Item?")) {

      let cardItems = e.target.parentElement;
      card.removeChild(cardItems);
    }
  }
}
});



