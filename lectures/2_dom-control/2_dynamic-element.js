let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');

let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  //button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');
  button.addEventListener('click', removeparentNode);
  li.appendChild(button);
  ul.appendChild(li);
});

addBeforeBtn.addEventListener('click', function () {
  // alert('앞에추가경고');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetli = document.querySelector('li#target');
  console.log(targetli);
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetli);
});

removeTargetBtn.addEventListener('click', function () {
  let targetli = document.querySelector('li#target');
  targetli.remove();
});

removeBtn.addEventListener('click', removeparentNode);

function removeparentNode(event) {
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
}
