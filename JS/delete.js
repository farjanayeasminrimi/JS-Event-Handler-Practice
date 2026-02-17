const deleteBtn = document.getElementById("delete-btn");
const deleteInput = document.getElementById("delete-input");
const main = document.getElementById("main");
deleteInput.addEventListener("mouseenter", function () {
  deleteInput.style.backgroundColor = "gold";
});

deleteInput.addEventListener("mousemove", function () {
  // console.log("moved");
});

deleteBtn.addEventListener("mouseout", function () {
  main.style.backgroundColor = "blue";
});

deleteInput.addEventListener("focus", function () {
  deleteInput.style.borderColor = "red";
  deleteInput.style.outline = "none";
});

deleteInput.addEventListener("blur", function () {
  if (deleteInput.value.length < 8) {
    alert("Password must be 8 character");
  }
});

deleteInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("Form Submitted");
  }
});

deleteInput.addEventListener("keydown", function (event) {
  // console.log(event.target.value);
});
deleteInput.addEventListener("keyup", function (event) {
  // console.log(event.target.value);
});
