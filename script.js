const navItems = document.getElementById("nav-items");
const overlay = document.getElementById("overlay");
const menuToggle = () => {
  if (navItems.style.display === "none") {
    navItems.style.display = "flex";
    overlay.style.display = "block";
  } else {
    navItems.style.display = "none";
    overlay.style.display = "none";
  }
};

const navFlex = () => {
  if (document.body.clientWidth > 768) {
    navItems.style.display = "flex";
    overlay.style.display = "none";
    console.log("test");
  } else {
    navItems.style.display = "none";
    overlay.style.display = "none";
  }
};

window.onresize = navFlex;

const playButton = document.getElementById("play-button");
const audio = document.getElementById("song-clip");

const playSample = () => {
  if (audio.paused) {
    audio.play();
    playButton.src = "./images/pausebuttons.png";
  } else {
    audio.pause();
    playButton.src = "./images/playbuttons.png";
  }
};

const navBar = document.getElementById("navigation");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
navBar.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    navBar.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: "800px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);

const purpleShirt = document.getElementById("purple-tshirt");

purpleShirt.addEventListener(
  "mouseenter",
  function (event) {
    event.target.src = "./images/purple-tshirt-front.jpg";
  },
  false
);
purpleShirt.addEventListener(
  "mouseleave",
  function (event) {
    event.target.src = "./images/purple-tshirt-back.jpg";
  },
  false
);

const blackShirt = document.getElementById("black-tshirt");

blackShirt.addEventListener(
  "mouseenter",
  function (event) {
    event.target.src = "./images/purple-tshirt-back.jpg";
  },
  false
);
blackShirt.addEventListener(
  "mouseleave",
  function (event) {
    event.target.src = "./images/purple-tshirt-front.jpg";
  },
  false
);
