function changeSpriteState(state) {
    const sprite = document.getElementById("sprite")
    sprite.className = state;

    sprite.addEventListener(
    "animationend",
    function resetToIdle() {
      sprite.classList.remove(state);
      sprite.removeEventListener("animationend", resetToIdle);
    },
    { once: true }
  );
}

function feed() {
    var bar = document.getElementById("hungerBar");
    var width = bar.offsetWidth;
    if (width < 286) {
        bar.style.width = (width + 10) + "px";
    }
}

function play() {
    var bar = document.getElementById("happinessBar");
    var width = bar.offsetWidth;
    if (width < 286) {
        bar.style.width = (width + 10) + "px";
    }
}

function sleep() {
    var bar = document.getElementById("energyBar");
    var width = bar.offsetWidth;
    if (width < 286) {
        bar.style.width = (width + 10) + "px";
    }
}