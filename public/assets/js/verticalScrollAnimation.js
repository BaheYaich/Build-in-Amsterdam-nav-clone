const images = document.querySelectorAll(".image-container > .image-row")
const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, 
{
    threshold: 0,
})

const lastImageObserver = new IntersectionObserver (entries => {
    const lastImage = entries[0]
    if (!lastImage.isIntersecting) return
    loadFirstImageAtLastPosition()
    lastImageObserver.unobserve(lastImage.target)
    lastImageObserver.observe(document.querySelector(".image-container > .image-row:last-child"))
}, {})

lastImageObserver.observe(document.querySelector(".image-container > .image-row:last-child"))

images.forEach(image => {
    observer.observe(image)
})

const imageContainer = document.querySelector(".image-container")
function loadFirstImageAtLastPosition() {
    let firstImage = document.querySelector(".image-container > .image-row:first-child")
    observer.observe(firstImage)
    imageContainer.append(firstImage)
}

let scrollDirection = 10;
function pageScroll() {
    imageContainer.animate({
        scrollTop: imageContainer.offset().top + scrollDirection
    }, 'slow'); 
}
pageScroll();
