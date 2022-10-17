import posts from "./data.js";

const container = document.getElementById("container");

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    const { name, location, avatar, post, likes, comment } = posts[i];
    container.innerHTML += `
     <div class="user--container">
        <div class="user--info">
          <div class="user--avatar"> <img class="user--avatar" src="${avatar}" /></div>
          <div class="user--details">
          <div class="user-main-name">${name}</div>
          <div class="user--location">${location}</div>
          </div>
        </div>

        <div class="user--image"><img src="${post}" /></div>

        <div class="icons">
          <div class="like-btn"> </div>
          <img src="images/comment.png" />
          <img src="images/share.png" />
        </div>
        <div class="like--count">${likes} likes </div>
        <div class="comment--section">
          <div class="user--comment"><span class="user--name"> ${name}</span>
           ${comment}</div>
        </div>
      </div>
      </div
    `;
  }
}

renderPosts();

function renderLike() {
  for (let i = 0; i < posts.length; i++) {
    const userLikeCount = document.getElementsByClassName("like--count");
    const likeBtn = document.getElementsByClassName("like-btn");
    let { isLiked, likes } = posts[i];
    likeBtn[i].addEventListener("click", () => {
      isLiked = !isLiked;
      if (isLiked) {
        userLikeCount[i].textContent = `${likes + 1} likes`;
        likeBtn[i].classList.add("likedBtn");
      } else if (!isLiked) {
        userLikeCount[i].textContent = `${likes} likes`;
        likeBtn[i].classList.remove("likedBtn");
      }
    });
  }
}
renderLike();
