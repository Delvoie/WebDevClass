wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
const showHideBtn = document.querySelector(".show-hide");
const commentWrapper = document.querySelector(".comment-wrapper");

showHideBtn.addEventListener("click", () => {
  commentWrapper.classList.toggle("hidden");
});

showHideBtn.textContent = "Show Comments";
commentWrapper.style.display = "none";

showHideBtn.onclick = function () {
  let showHideText = showHideBtn.textContent;
  if (showHideText === "Show Comments") {
    showHideBtn.textContent = "Hide Comments";
    commentWrapper.style.display = "block";
  } else {
    showHideBtn.textContent = "Show Comments";
    commentWrapper.style.display = "none";
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector(".comment-form");
const nameField = document.querySelector("#name");
const commentField = document.querySelector("#comment");
const list = document.querySelector(".comment-container");

form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement("li");
  const namePara = document.createElement("p");
  const commentPara = document.createElement("p");
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = "";
  commentField.value = "";
}

// audio transcript
const transcript = document.querySelector(".transcript");
const transcriptBtn = document.querySelector(".transcript-button");
const transcriptCon = document.querySelector(".transcript-container");

transcriptBtn.onclick = () => {
  if (transcriptBtn.textContent === "Show Transcript") {
    transcript.style.display = "block";
    transcriptBtn.textContent = "Hide Transcript";
  } else {
    transcript.style.display = "none";
    transcriptBtn.textContent = "Show Transcript";
  }
};
