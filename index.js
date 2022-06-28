console.log("ok this works not fucked up gj dawg");
//api
let api =
  "https://api.giphy.com/v1/gifs/search?api_key=P7JZb1su5AOUPUjlc1zWpqSFegSuG5rE&q=Michael+Jackson&limit=50&offset=0&rating=r&lang=en";

//contents
let button = document.querySelector(".button");
let img = document.querySelector(".img");

//on click function for button, gets pics from api
function mjButton(e) {
  e.preventDefault();
  fetch(api)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      img.src =
        res.data[
          Math.floor(Math.random() * res.data.length)
        ].images.downsized.url;
    });
}
button.addEventListener("click", mjButton);

let audio = new Audio("hee-hee.mp3");
button.onclick = function () {
  audio.play();
};
