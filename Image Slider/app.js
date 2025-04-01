const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400',
    'https://picsum.photos/id/1020/600/400',
    'https://picsum.photos/id/1021/600/400'
];

const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function initSlider() {
    
    slider.innerHTML = '';
        images.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Slide ${index + 1}`;
            if (index === 0) {
            img.classList.add('active');
        }
        
        slider.appendChild(img);
    });
}

function showSlide(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    
   
    currentIndex = index;
    
    
    const slides = document.querySelectorAll('.slider img');
    
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    
    slides[index].classList.add('active');
}


prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
        showSlide(currentIndex + 1);
    }
});


window.addEventListener('DOMContentLoaded', initSlider);

let slideInterval;

function startAutoPlay() {
    slideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

function stopAutoPlay() {
    clearInterval(slideInterval);
}


slider.addEventListener('mouseleave', startAutoPlay);


slider.addEventListener('mouseenter', stopAutoPlay);
startAutoPlay();

function addDots() {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');
    
    images.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        
        dotsContainer.appendChild(dot);
    });
    
    slider.parentNode.insertBefore(dotsContainer, slider.nextSibling);
}


addDots();


const dots = document.querySelectorAll('.dot');
dots.forEach(dot => dot.classList.remove('active'));
dots[index].classList.add('active');