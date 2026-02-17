const btn2nd = document.getElementById("2nd-btn");
btn2nd.onclick = function () {
  const section2nd = document.getElementById("section-2");
  section2nd.style.backgroundColor = "blue";
  const listAncor = document.querySelectorAll("#menu-2nd li a");
  for (let a of listAncor) {
    a.style.color = "white";
  }
};
