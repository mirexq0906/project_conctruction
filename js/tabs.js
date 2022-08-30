document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.section-working__item-link').forEach(function(items) {
        items.addEventListener('click', function(itemClick) {
            const path = itemClick.currentTarget.dataset.path
            document.querySelectorAll('.section-working__row').forEach(function(active) {
                active.classList.remove('section-working__row-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-working__row-active')
            document.querySelectorAll('.section-working__item-link').forEach(function(active) {
                active.classList.remove('section-working__link-active')
            })
            document.querySelector(`[data-path="${path}"]`).classList.add('section-working__link-active')
        })  
    })
})    