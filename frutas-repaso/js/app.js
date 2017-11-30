// 1. Llamamos los elementos del HTML a JS
var containerFruits = document.getElementById('fruits-container');
// 2. Creamos los elementos que necesitamos
var title = document.createElement('h1');
var form = document.createElement('form');
var input = document.createElement('input');
var btnSubmit = document.createElement('button');
var list = document.createElement('ol');
// 3. Le agregamos atributos a esos elementos creados
  containerFruits.style.textAlign = 'center';
  title.innerText = 'Fruit list';
  input.id = 'input-fruit';
  input.setAttribute("type", "text");
  btnSubmit.innerText = 'Add fruit';
// 4. Agregamos eventos (si se necesitan)
btnSubmit.onclick = showFruitInContainer;
// 5. Decimos donde se van a crear
containerFruits.appendChild(title);
containerFruits.appendChild(form);
containerFruits.appendChild(list);
form.appendChild(input);
form.appendChild(btnSubmit);

function showFruitInContainer() {
  event.preventDefault();
  //1. traer los elementos de HTML a JS
  var inputText = document.getElementById('input-fruit').value;
  console.log(inputText.length);
  //2. Crear los elementos necesarios
  var itemList = document.createElement('li');
  var btnDelete = document.createElement('button');
  //3. darle atributos
  itemList.innerText = inputText;
  btnDelete.innerText = 'x';
  //4. agregar eventos
  btnDelete.onclick = removeNode;
  //5. decirle donde
  list.appendChild(itemList);
  itemList.appendChild(btnDelete);


  clearInput();
}

function clearInput(){
  inputText.value = '';
}

function removeNode(){
  this.parentNode.remove();
}
