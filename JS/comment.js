const commentBtn = document.getElementById("#comment-btn");
commentBtn.addEventListener("click", function () {
  // get new comment from text area
  const textArea = document.querySelector(".textarea-box");
  const newComment = textArea.value;

  // create new p for new comment
  const newP = document.createElement("p");
  newP.innerText = newComment;
  newP.classList.add("comment");

  // appendChild p to commentContainer
  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(newP);
});
