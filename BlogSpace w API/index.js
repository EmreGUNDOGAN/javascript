const blogDetails = document.getElementById("blog-details");
const submitBtn = document.getElementById("submit-btn");

let postsArray = [];

function renderPosts() {
  let html = "";
  for (post of postsArray) {
    html += `
    <div class="post-container">
      <h3 class="post-title">
      <span class="reading-time">${getReadingTime()} mins reading time</span>
    ${post.title} </h3>
      <p class="post-body">${post.body}</p>
       </div>
      `;
  }

  blogDetails.innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArray = data.splice(0, 20);
    renderPosts();
  });

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let postTitle = document.getElementById("post-title").value;
  let postBody = document.getElementById("post-body").value;

  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((response) => response.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();

      document.getElementById("post-title").value = "";
      document.getElementById("post-body").value = "";
    });
});

function getReadingTime() {
  const readingTime = post.body.length / 200;
  return Math.round(readingTime);
}
