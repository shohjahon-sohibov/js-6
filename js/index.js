var elShoppingForm = document.querySelector('.shopping-form');
var elShoppingInput = elShoppingForm.querySelector('.shopping-input');
var elShoppingList = document.querySelector('.shopping-list');

var shoppingList = [];

elShoppingForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  shoppingList.push(elShoppingInput.value.trim());
  elShoppingInput.focus();
  console.log(shoppingList);
  elShoppingList.innerHTML = '';
  
  for (var product of shoppingList) {
    var newElPruduct = document.createElement("li");
    newElPruduct.style.listStyleType = 'none';
    newElPruduct.textContent = product;
    
    elShoppingList.appendChild(newElPruduct);
  }
})
