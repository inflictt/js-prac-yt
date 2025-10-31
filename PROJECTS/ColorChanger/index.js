const btn = document.querySelectorAll('.button');
console.log(btn);
const body = document.querySelector('body');
btn.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target === grey) {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target === white) {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target === blue) {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target === yellow) {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target === aqua) {
      body.style.backgroundColor = event.target.id;
    }
  });
});
