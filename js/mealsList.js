document.addEventListener('DOMContentLoaded', showMeal);


//show a meal from menu array
function showMeal() {
  const results = document.getElementById("results");
  let menu = JSON.parse(localStorage.getItem('menu')) || [];
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
card.addEventListener("mouseover", btnDelHover);
card.addEventListener("mouseout", btnDelOut);

//Delete item
function removeItem(e) {
console.log('click');
  if (e.target.classList.contains("btnDelete")) {
    if (confirm("Are You Sure You Want To Delete This Item?")) {

      let cardItems = e.target.parentElement;
      let index = Array.prototype.indexOf.call(card.children, cardItems);
      removeLocalStorage(index);
      card.removeChild(cardItems);
    }
  }
}
  
function removeLocalStorage(index){
  let store = JSON.parse(localStorage.getItem("menu")) || [];
  store.splice(index, 1);
  localStorage.setItem('menu', JSON.stringify(store));
}
  
  function btnDelHover(e){
    if(e.target.classList.contains("btnDelete")){
      let cardItems = e.target.parentElement;
      cardItems.style.background = "#8c0005";
      cardItems.style.color = "#e8e8e8";
    }
  }

  function btnDelOut(e){
    if(e.target.classList.contains("btnDelete")){
      let cardItems = e.target.parentElement;
      cardItems.style.background = "#e8e8e8";
      cardItems.style.color = "#1d1d1d";
    }
  }
});
