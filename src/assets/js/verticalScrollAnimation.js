const imageContainer = document.querySelector(".grid-container > .column")
// const navButton = document.querySelector("#navToggle")
let isScrolling = true
if (isMobile) isScrolling = false

imageScroll = () => {
  imageContainer.scrollTop += 10
}

let customInterval = setInterval(imageScroll, 100)

toggleScroll = () => {
  isScrolling = !isScrolling
  if (isScrolling) {
    customInterval = setInterval(imageScroll, 100)
  } else {
    clearInterval(customInterval)
  }}

navButton.addEventListener('click', () => {
  toggleScroll()
})
