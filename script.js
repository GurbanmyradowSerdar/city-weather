function weatherLoad(input) {
  const xHttp = new XMLHttpRequest();
  input = input.toLowerCase();

  xHttp.onload = function () {
    let result = JSON.parse(this.response);

    if (result.cod > 200) {
    } else {
      let city = document.getElementById("city");
      city.innerHTML = result.name;

      let deg = result.main.temp;
      changeDeg(deg);

      let main = result.weather[0].main;
      changeWeather(main);

      let windd = result.wind.speed;
      wind(windd);

      let number = result.weather[0].icon;
      changeIcon(number);

      let cloud = result.clouds.all;
      changeCloud(cloud);
    }
  };

  xHttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=dae9cdbf07b5a28386c7447cf914ce6e&units=metric`,
    true
  );

  xHttp.send();
}

let button = document.getElementById("button");

// Button click SEARCH
button.onclick = function () {
  let input = document.getElementById("input").value;
  if (!Number(input) && input.trim().length > 0) {
    input = input.trim();

    weatherLoad(input);
  } else {
    alert("Please write the right city");
  }
};

// Change deg
function changeDeg(deg) {
  let degBlock = document.getElementById("deg");
  degBlock.innerHTML = `${deg}°`;
}

// Change mainWeather
function changeWeather(main) {
  let block = document.getElementById("main");
  block.innerHTML = `${main}`;
}

// Change windSpeed
function wind(wind) {
  let block = document.getElementById("wind");
  block.innerHTML = `Wind ${wind}km/h`;
}

// Change icon
function changeIcon(number) {
  let block = document.getElementById("icon");
  let icon = `http://openweathermap.org/img/wn/${number}@2x.png`;
  block.src = icon;
}

// Cloud precent
function changeCloud(cloud) {
  let block = document.getElementById("cloud");
  block.innerHTML = `Cloudiness ${cloud}%`;
}
