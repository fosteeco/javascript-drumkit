const keys = document.querySelectorAll(".key");
const letterArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const audios = document.querySelectorAll("audio");
const keyArr = [...keys];
const keyMap = {};

const setAudioByKey = (soundString) => {
  return soundString;
};

keyArr.forEach((key) => {
  const keyChar = key.querySelector("kbd").innerText.toLowerCase();
  const soundFolder = "/sounds/";
  const soundString =
    soundFolder + key.querySelector("span").innerText.toLowerCase() + ".wav";
  console.log("keyChar :", keyChar);
  keyMap[keyChar] = {
    keyDiv: key,
    audio: setAudioByKey(soundString),
  };
});

document.addEventListener("keyup", (e) => {
  const keyPressed = e.key;
  if (letterArr.includes(keyPressed)) {
    const keyDiv = keyMap[keyPressed].keyDiv;
    const audio = new Audio(keyMap[keyPressed].audio);
    audio.play();
    keyDiv.classList.add("playing");
    const timeOut = setTimeout(() => {
      keyDiv.classList.remove("playing");
    }, 100);
  }
});
