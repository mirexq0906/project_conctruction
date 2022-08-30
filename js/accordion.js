document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.section-questions__item-plus').forEach(function(itemPlus) {
        itemPlus.addEventListener('click', function(plusClick) {
            const path = plusClick.currentTarget.dataset.path
            const nameClass = plusClick.currentTarget.className
            const activeBlock = document.querySelector(`[data-target="${path}"]`)
            if ( nameClass === 'section-questions__item-plus section-questions__plus-active') {
                document.querySelectorAll('.section-questions__item-description').forEach(function(active) {
                    active.classList.remove('section-questions__description-active')
                    active.style.height = 0 + 'px'
                })
                itemPlus.classList.remove('section-questions__plus-active')
            } 
            else {
                document.querySelectorAll('.section-questions__item-description').forEach(function(active) {
                    active.classList.remove('section-questions__description-active')
                    active.style.height = 0 + 'px'
                })
                document.querySelectorAll('.section-questions__item-plus').forEach(function(deleteActive) {
                    deleteActive.classList.remove('section-questions__plus-active')
                }) 
                itemPlus.classList.add('section-questions__plus-active')
                activeBlock.style.height = activeBlock.scrollHeight + 'px'
                activeBlock.classList.add('section-questions__description-active') 
            }  
        })  
    })
})
