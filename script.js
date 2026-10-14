// const sher = document.getElementById("sher");
// const para = document.getElementById("para");
// const btn = document.getElementById("btn");
// sher.innerText = "i am a student";
// para.innerText = "this is a para";
// btn.innerText = "this is a button";

// btn.addEventListener("click", function () {
//   sher.innerText = " CLICK BUTTON";
// });

// console.log(sher);
// console.log(sher.innertext);
console.log(window);
let input = document.querySelector("#name");
let button = document.querySelector("#btn");
let output = document.querySelector("#output");
output.innerHTML = localStorage.getItem("name") || "";

button.addEventListener("click", function () {
  output.innerHTML += `<p>${input.value}</p>`;
  console.log(output.innerHTML, "output ");

  input.value = "";

  localStorage.setItem("name", output.innerHTML);
  console.log(localStorage.getItem("name"), "localStorage");
});

let dlt = document.querySelector("#btn2");
dlt.addEventListener("click", function () {
  output.innerHTML = " ";
  console.log(output.innerHTML, "output");
});
