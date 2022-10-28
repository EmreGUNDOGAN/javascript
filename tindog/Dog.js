class Dog {
  constructor(data) {
    Object.assign(this, data);
  }


  getDogHtml() {
    const { avatar, name, age, bio } = this;

    return `
    <div id="dislike-badge"></div>
    <div id="like-badge"></div>
    <div class="dog--container" style="background-image: url(${avatar})">
      <div class="dog--details">
        <h1 class="dog--info">${name}, ${age}</h1>
        <p class="dog--message">${bio}</p>
      </div>
    </div>
    `;
  }
}

export default Dog;
