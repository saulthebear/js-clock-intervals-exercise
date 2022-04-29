// Get current time to set initial values
const currentTime = new Date()

let currentHours = currentTime.getHours()
if (currentHours > 12) {
  currentHours -= 12
}
const currentMinutes = currentTime.getMinutes()
const currentSeconds = currentTime.getSeconds()

// Set initial values
let secondDeg = (360 / 60) * currentSeconds
let minuteDeg = (360 / 60) * currentMinutes
let hourDeg = (360 / 12) * currentHours

// Clock hands
const secondHand = document.querySelector("#second")
const minuteHand = document.querySelector("#minute")
const hourHand = document.querySelector("#hour")

setInterval(function () {
  secondDeg += 360 / 60
  minuteDeg += 360 / 60 / 60
  hourDeg += 360 / 60 / 60 / 60

  secondHand.style.transform = `rotate(${secondDeg}deg)`
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}, 1000)

////////////////////
// Digital Clock //
//////////////////

// Digital clock elements
const digitalHours = document.querySelector("#digitalHours")
const digitalMinutes = document.querySelector("#digitalMinutes")
const digitalSeconds = document.querySelector("#digitalSeconds")

const numToPaddedString = (num) => num.toString().padStart(2, "0")

// Set them once before the interval
digitalHours.innerText = numToPaddedString(currentTime.getHours())
digitalMinutes.innerText = numToPaddedString(currentMinutes)
digitalSeconds.innerText = numToPaddedString(currentSeconds)

// Set them every second to the current time
setInterval(() => {
  const currentTime = new Date()

  digitalHours.innerText = numToPaddedString(currentTime.getHours())
  digitalMinutes.innerText = numToPaddedString(currentTime.getMinutes())
  digitalSeconds.innerText = numToPaddedString(currentTime.getSeconds())
}, 500)
