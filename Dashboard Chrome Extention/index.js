//get random bg image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong!");
    }
    return res.json();
  })
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = `Photo by: ${data.user.name}`;
  })
  .catch((err) => {
    document.getElementById("author").textContent = `Photo by: Unknown`;
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80)`;
  }); //default bg & author

//get coin data
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("coinData").innerHTML = `
    <div class="coin-name-holder">
    <img src="${data.image.small}">
    <p class="coin-name"> ${data.name} </p>
    </div>

    <div class="coin-stats">
    <p class="stat"><span> 🏷️ </span> $${data.market_data.current_price.usd.toFixed()}</p>
    <p class="stat"><span> 📈 </span> $${data.market_data.high_24h.usd.toFixed()}</p>
    <p class="stat"><span> 📉 </span> $${data.market_data.low_24h.usd.toFixed()}</p>
    </div>
    `;
  })
  .catch((err) => console.log(err));

//get current time
function getCurrentTime() {
  let date = new Date();
  let dateString = date.toLocaleTimeString([], { timeStyle: "short" });
  //get day/month/year
  const options = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
  const getYear = date.toLocaleDateString(undefined, options);
  document.getElementById("year").textContent = getYear;
  document.getElementById("time").textContent = dateString;
}

setInterval(getCurrentTime, 1000);

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong!");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
      <div  class="weather-degree">
        <img src=${iconUrl} class="weather-icon"></img>
        <p class="degree">${data.main.temp.toFixed()}°</p>
      </div>
        <p class="location weather-details">${data.name}</p>
        <p class="humidity weather-details">${data.main.humidity}</p>
       
        `;
    });
});
{
  /* <p class="weather-details">Humidity: ${data.main.humidity}</p>; */
}

fetch("https://api.quotable.io/random")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("quotes").textContent = `“${data.content}”  -${data.author}`;
  })
  .catch((err) => console.log(err));
