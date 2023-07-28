const form = document.querySelector("form");
let input = document.querySelector('input');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const dismiss = document.querySelector('.dismiss');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(input.value.length === 0){
    alert("Invalid email entry!");
  }
  else {
    card1.classList.add("hide");
    card2.classList.remove("hide");
  }
  
})

dismiss.addEventListener("click", disMiss);
function disMiss() {
  card2.classList.add("hide");
  card1.classList.remove("hide");
  form.reset();
}