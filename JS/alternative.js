const alternativeBtn = document.getElementById("alternative-btn");
alternativeBtn.onclick = backgroundChange;
function backgroundChange() {
  const alternativeSection = document.querySelector("#alternative-section");
  alternativeSection.style.backgroundColor = "green";
}
