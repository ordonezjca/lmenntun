// Script para el Carrusel de Testimonios
document.addEventListener('DOMContentLoaded', () => {
    const slideContainer = document.querySelector('.testimonial-slide');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function updateSlide(position) {
        slideContainer.style.transform = `translateX(-${position * 100}%)`;
        updateIndicators();
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = testimonials.length - 1;
        } else {
            currentIndex--;
        }
        updateSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex === testimonials.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlide(currentIndex);
    });

    // Desplazamiento automático (Opcional)
    let autoSlide = setInterval(() => {
        nextBtn.click();
    }, 5000);

    slideContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    slideContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            nextBtn.click();
        }, 5000);
    });

    // Indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlide(currentIndex);
        });
    });
});
