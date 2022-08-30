    document.addEventListener('DOMContentLoaded', function(){
        let slider = document.querySelector('.slider')
        let sliderWidth = document.querySelector('.slider').offsetWidth
        let itemSlider = document.querySelectorAll('.slider__item')
        let dots = document.querySelectorAll('.slider__dots-item')
        let count = 0
        let sum = 0
        let hover;
        function leftMove() {
            sum = sum - sliderWidth
            count = count - 1
            for(i = 0; i < itemSlider.length; i++) {
                if (count === -1) {
                    sum = (itemSlider.length - 1) * sliderWidth
                    count = itemSlider.length - 1
                }
                itemSlider[i].style.transform = `translateX(-${sum}px)`;
            }
            for(i = 0; i < dots.length; i++) {
                dots[i].classList.remove('slider__dots-active')
            }
            dots[count].classList.add('slider__dots-active')

        }
        function rightMove() {
            sum = sum + sliderWidth
            count = count + 1
            
            for(i = 0; i < itemSlider.length; i++) {
                
                if (itemSlider.length === count) {
                    sum = 0
                    count = 0
                }
                itemSlider[i].style.transform = `translateX(-${sum}px)`;
            }
            for(i = 0; i < dots.length; i++) {
                dots[i].classList.remove('slider__dots-active')
            }
            dots[count].classList.add('slider__dots-active')
            
        }
        function dotsSlider(n) {
            sum = n * sliderWidth
            count = n
            for(i = 0; i < itemSlider.length; i++) {
                itemSlider[i].style.transform = `translateX(-${sum}px)`;
                dots[i].classList.remove('slider__dots-active')
            }
            
            dots[count].classList.add('slider__dots-active')
        }
        slider.addEventListener('mousemove', () => hover = 1);
        slider.addEventListener('mouseout', () => hover = 0);
        setInterval (() => !hover && rightMove(), 10000)
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                dotsSlider(index)
            })
        })
})    
    
