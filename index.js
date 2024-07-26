const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const content = document.querySelector(".container");

content.innerHTML = posts
  .map(
    (post) => ` <section class="card">
        <div class="title-section">
          <div class="img-profile">
            <img src=${post.avatar} alt="" />
          </div>
          <div class="text-content">
            <p class="bold">${post.username}</p>
            <p>${post.location}</p>
          </div>
        </div>
        <div class="img-section">
          <img src=${post.post} alt="" />
        </div>
        <div class="content-section">
          <div class="content-img">
            <img src="images/icon-heart.png" alt="" />
            <img src="images/icon-comment.png" alt="" />
            <img src="images/icon-dm.png" alt="" />
          </div>
          <div class="text">
            <p class="bold">${post.likes} likes</p>
            <p class="small">
              <span class="bold">${post.username}</span> ${post.comment}
            </p>
          </div>
        </div>
      </section>`
  )
  .join("");
