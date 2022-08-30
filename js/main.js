document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.header__search').forEach(function(items) {
        items.addEventListener('click', function() {
            document.querySelector('.header__search-modal').classList.add('header__search-modal-active')
        })
    })
    document.querySelector('.header__search-modal-close').addEventListener('click', function() {
        document.querySelector('.header__search-modal').classList.remove('header__search-modal-active')
    })
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__nav-mobile').classList.add('header__nav-mobile-active')
    })
    document.querySelector('.header__nav-mobile-close').addEventListener('click', function() {
        document.querySelector('.header__nav-mobile').classList.remove('header__nav-mobile-active')
    })
})