const localUserName = localStorage.getItem('username');
console.log(localUserName);

if (localUserName) {
  document.querySelector("#name").style.display = "none";

  let now = new Date();
  let hourOfDay = now.getHours();
  let partOfDay = setClock();

  let name = document.querySelector("#name-label");
  name.style.display = "block";
  fadeIn(name);

  name.innerHTML = "Good " + partOfDay + ", " + localUserName + ".";
} else {
  document.querySelector("#name").addEventListener("input", (event) => {
    let nameValue = event.target.value.trim();
    
    if (nameValue !== "") {
      let now = new Date();
      let hourOfDay = now.getHours();
      let partOfDay = setClock();
  
      let name = document.querySelector("#name-label");
  
      name.innerHTML = "Good " + partOfDay + ", " + nameValue + ".";
      fadeOut(document.querySelector("#name"));
      localStorage.setItem('username', nameValue);
      fadeIn(name);
    }
  });
}

function setClock() {
  let now = new Date();
  let hourOfDay = now.getHours();
  let partOfDay = "";

  if (hourOfDay < 12) {
    partOfDay = "morning";
  } else if (hourOfDay < 18) {
    partOfDay = "afternoon";
  } else {
    partOfDay = "evening";
  }

  return partOfDay;
}

function fadeIn(element) {
  element.style.opacity = 0;

  let opacity = 0;
  let interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

function fadeOut(element) {
  element.style.opacity = 1;

  let opacity = 1;
  let interval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
}
