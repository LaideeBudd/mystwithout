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

// const playSample = () => {
//   audio.play();
// };

const playSample = () => {
  if (audio.paused) {
    audio.play();
    playButton.src = "./images/pausebuttons.png";
  } else {
    audio.pause();
    playButton.src = "./images/playbuttons.png";
  }
};
