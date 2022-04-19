const keys = document.querySelectorAll(".key");
const letterArr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const audios = document.querySelectorAll("audio");
const keyArr = [...keys];
const keyMap = {};

const setAudioByKey = (dataKey) => {
  return document.querySelector(`audio[data-key="${dataKey}"`);
};

keyArr.forEach((key) => {
  const keyChar = key.querySelector("kbd").innerText.toLowerCase();
  const dataKey = key.getAttribute("data-key");
  const soundFolder = "/sounds/";
  const soundString =
    soundFolder + key.querySelector("span").innerText.toLowerCase() + ".wav";
  console.log("keyChar :", keyChar);
  keyMap[keyChar] = {
    keyDiv: key,
    audio: setAudioByKey(dataKey),
  };
});

document.addEventListener("keyup", (e) => {
  const keyPressed = e.key;
  if (letterArr.includes(keyPressed)) {
    const keyDiv = keyMap[keyPressed].keyDiv;
    const audio = keyMap[keyPressed].audio;
    audio.currentTime = 0;
    audio.play();
    keyDiv.classList.add("playing");
    const timeOut = setTimeout(() => {
      keyDiv.classList.remove("playing");
    }, 100);
  }
});
