console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const article = document.createElement("article");
article.classList.add("post");

const paragraph = document.createElement("p");
paragraph.classList.add("post__content");
paragraph.textContent =
  "2. Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";

const likeButton = document.createElement("button");
likeButton.type = "button";
likeButton.classList.add("post__button");
likeButton.textContent = "♥ Like";

likeButton.addEventListener("click", handleLikeButtonClick);

footer.append(username, likeButton);
article.append(paragraph, footer);
document.body.append(article);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const article2 = document.createElement("article");
article2.classList.add("post");

const paragraph2 = document.createElement("p");
paragraph2.classList.add("post__content");
paragraph2.textContent =
  "2. Lorem ipsum dolor, sit amet cweonsectetur adipisicing elit.";

const footer2 = document.createElement("footer");
footer2.classList.add("post__footer");

const username2 = document.createElement("span");
username2.classList.add("post__username");
username2.textContent = "@username";

const likeButton2 = document.createElement("button");
likeButton2.type = "button";
likeButton2.classList.add("post__button");
likeButton2.textContent = "♥ Like";

likeButton2.addEventListener("click", handleLikeButtonClick);

footer2.append(username2, likeButton2);
article2.append(paragraph2, footer2);
document.body.append(article2);
