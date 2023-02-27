const navWrapper = document.getElementById("nav")
const track = document.getElementById("image-track");
const navItems = document.querySelectorAll(".nav-item")

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") {
        navItems.forEach(element => {
            element.style = 'pointer-events: all;'
        })
        return
    } else {
        navItems.forEach(element => {
            element.style = 'pointer-events: none;'
            element.ondragstart = () => {
                return false
              }
        })
    }

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, 0%)`
    }, { duration: 1200, fill: "forwards" });
}

navWrapper.onmousedown = e => handleOnDown(e);

navWrapper.ontouchstart = e => handleOnDown(e.touches[0]);

navWrapper.onmouseup = e => handleOnUp(e);

navWrapper.ontouchend = e => handleOnUp(e.touches[0]);

navWrapper.onmousemove = e => handleOnMove(e);

navWrapper.ontouchmove = e => handleOnMove(e.touches[0]);