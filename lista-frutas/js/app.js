// Traer elementos del html
var fruitsContainer = document.getElementById('fruits-container');

// Crear elementos
var title = document.createElement('h1');
var list = document.createElement('ol');
var form = document.createElement('form');
var inputFruits = document.createElement('input');
var button = document.createElement('button');

// Darles atributos o lo que sea a los elementos creados
fruitsContainer.style.textAlign = 'center';
title.innerText = 'Fruit list';
title.style.fontSize = 'xx-large';
form.style.textAlign = 'center';
inputFruits.setAttribute("type", "text");
inputFruits.id = 'input';
button.type = "submit";
button.innerText = 'Add fruit';
button.style.fontSize = 'large';

// Agregar eventos
button.onclick = showFruitInHtml;

// Decir donde lo vamos a Crear o de quién es hijo.
fruitsContainer.appendChild(title);
fruitsContainer.appendChild(form);
form.appendChild(inputFruits);
form.appendChild(button);
fruitsContainer.appendChild(list);

function showFruitInHtml() {
  event.preventDefault();

  // traemos los elementos
  var fruitText = document.getElementById('input').value;
  console.log('contador input:', fruitText);

  // creamos
  var li = document.createElement('li');
  var btnDelete = document.createElement('button');

  // agregamos atributos
  li.innerText = fruitText;
  li.style.fontSize = '20px';
  btnDelete.innerText = 'x';
  btnDelete.id = 'btn-delete';

  //eventos
  btnDelete.onclick = removeElement;

  // decimos dónde se crean
  list.appendChild(li);
  li.appendChild(btnDelete);

  clearInput();
} // muestra las frutas en el documento


function removeElement() {
  this.parentNode.remove()
} // elimina la fruta

function clearInput(){
  inputFruits.value = '';
}  // limpia el input después de que la fruta se agrega
