var bton2 = document.querySelector('#btn2');
bton2.onclick = () => alert("Hello World");

var bton3 = document.querySelector('#btn3');
bton3.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}
function alertFunction2() {
    alert("YAY! YOU DID THAT!");
}
function alertFunction3() {
    alert("WOW! YOU ARE SUCH A PRO.");
}

var bton5 = document.querySelector('#btn5');
bton5.onclick = alertFunction2;

var bton6 = document.querySelector('#btn6');
bton6.addEventListener('click', alertFunction3);

var bton7 = document.querySelector('#btn7');
bton7.addEventListener('click', function(e){
    e.target.style.background = 'blue'
    console.log(e.target)
  })

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});