let track = document.querySelector('.carousel-track')
let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')

let currentIndex = 0

function updateCarousel(){
    let itemWidth = document.querySelector('.carousel-container').offsetWidth
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`
}

prevButton.addEventListener('click', () =>{
    if (currentIndex > 0){
        currentIndex--
        updateCarousel()
    }
})

nextButton.addEventListener('click', () =>{
    let items = document.querySelectorAll('.carousel-item')
    if (currentIndex < items.length - 1){
        currentIndex++
        updateCarousel()
    }
})

window.addEventListener('resize', updateCarousel)