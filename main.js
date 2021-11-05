import './style.css'

var vca
var vco

const c = 261.63
const d = 293.66
const e = 329.63
const f = 349.23
const g = 392.00
const a = 440.00
const b = 493.88

document.getElementById("button").addEventListener("click", e => {
  var context = new AudioContext()

  vco = context.createOscillator()
  vco.type = "sine"
  vco.start(0)

  /* VCA */
  vca = context.createGain();
  vca.gain.value = 0;

  /* Connections */
  vco.connect(vca);
  vca.connect(context.destination);
})

document.addEventListener("keydown", event => {
  if (event.key === "a") {
    vco.frequency.value = c
    vca.gain.value = 1
  } else if (event.key === "s") {
    vco.frequency.value = d
    vca.gain.value = 1
  } else if (event.key === "d") {
    vco.frequency.value = e
    vca.gain.value = 1
  } else if (event.key === "f") {
    vco.frequency.value = f
    vca.gain.value = 1
  } else if (event.key === "g") {
    vco.frequency.value = g
    vca.gain.value = 1
  } else if (event.key === "h") {
    vco.frequency.value = a
    vca.gain.value = 1
  } else if (event.key === "j") {
    vco.frequency.value = b
    vca.gain.value = 1
  } else {
    vca.gain.value = 0
  }
})

document.addEventListener("keyup", e => {
  vca.gain.value = 0
})
