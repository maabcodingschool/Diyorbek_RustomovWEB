const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlindeIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlindeIndex++
        if(activeSlindeIndex > slidesLength - 1) {
            activeSlindeIndex = 0
        }
        }else if(direction === 'down') {
            activeSlindeIndex--
        if(activeSlindeIndex < 0) {
            activeSlindeIndex = slidesLength - 1
    }
}

    slideRight.style.transform = `translateY(-${activeSlindeIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlindeIndex * sliderHeight}px)`
}