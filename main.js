  const mealBtn = document.getElementById('mealBtn');
  const currentMeal = document.getElementById('current-meal');
  const message = document.getElementById('message');

  const menu = [
    'Potato soup',
    'Chili',
    'Burgers',
    'Spaghetti', 
    'Taco casserole', 
    'Home made pizza',
    'Meat loaf',
    'White chicken chili',
    'Grilled cheese/mashed potatoes',
    'Beef stew',
    'Roast',
    'Steak', 
    'Cheesy chicken and broccoli', 
    'Fajita casserole', 
    'Bacon cheese burger casserole', 
    'Chicken and dumpling casserole',  
    'Pancakes', 
    'Biscuits and gravy',
    'Take Out?'
  ];

  mealBtn.addEventListener('click', () => showMeal(menu));

  //show a meal from menu array
  function showMeal(menu){
    const randIndex = Math.floor(Math.random() * menu.length);
    currentMeal.innerHTML = menu[randIndex];
    message.innerHTML = 'How about this?';
    message.style.color = '#003b6f'
  };
