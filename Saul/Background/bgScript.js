 let backgroundUrl = [
      "https://wallpapercave.com/wp/wp4676578.jpg",
      "https://wallpapercave.com/wp/wp4676576.jpg",
      "https://wallpapercave.com/wp/wp4676584.jpg",
      "https://wallpapercave.com/wp/wp4676598.jpg",
      "https://wallpapercave.com/wp/wp4676613.png",
      "https://wallpapercave.com/wp/wp4676581.jpg",
      "https://wallpapercave.com/uwp/uwp3415644.jpeg",
      "https://wallpapercave.com/wp/wp11849488.jpg",
      "https://wallpapercave.com/wp/wp11849542.jpg",
      "https://wallpapercave.com/wp/wp12476843.jpg"

    ];
let preloadedImages = [];

function preloadImages() {
  for (let i = 0; i < backgroundUrl.length; i++) {
    let loadImage = new Image();
    loadImage.src = backgroundUrl[i];
    preloadedImages.push(loadImage);
  }
}

function changeBackground() {
  let randomImage = Math.floor(Math.random() * backgroundUrl.length);
  let randomImageUrl = backgroundUrl[randomImage];

  document.getElementById('backgroundGen').style.backgroundImage = "url('" + randomImageUrl + "')";
}

window.onload = function() {
  preloadImages();
  changeBackground();
}