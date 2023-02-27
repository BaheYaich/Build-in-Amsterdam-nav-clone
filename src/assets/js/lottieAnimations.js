const lottieContainer = document.querySelector('.lottie-container')
const lottieContainer2 = document.querySelector('.lottie-container2')
let isClosed = true

const menuAnim = bodymovin.loadAnimation({
    wrapper: lottieContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/json/menuAnim.json'
})

const closeAnim = bodymovin.loadAnimation({
    wrapper: lottieContainer2,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/json/closeAnim.json'
})

menuAnim.setSpeed(4)
closeAnim.setSpeed(4)

const menuAnimDefaultBehavior = () => {
    lottieContainer.classList.remove('hide');
    menuAnim.setDirection(1)
    menuAnim.play()
    if(!isClosed) {
        lottieContainer.classList.add('hide');
    }
}

navButton.addEventListener('focus', () => {
    menuAnimDefaultBehavior()
})

navButton.addEventListener('mouseover', () => {
    menuAnimDefaultBehavior()
})

navButton.addEventListener('mouseleave', () => {
    menuAnim.setDirection(-1)
    menuAnim.play()
})

navButton.addEventListener('click', () => {
    isClosed = !isClosed
    if(isClosed) {
        lottieContainer2.classList.add('hide')
        lottieContainer.classList.remove('hide')
        menuAnim.setDirection(1)
        menuAnim.play()
    } else {
        lottieContainer.classList.add('hide')
        lottieContainer2.classList.remove('hide')
        closeAnim.setDirection(-1)
        closeAnim.play()
    }
})