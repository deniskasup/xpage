// Styles
import './src/sass/main.sass'

// import Swiper styles
import 'swiper/swiper-bundle.min.css';


// fancybox
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'
import '@fancyapps/fancybox'


// Swiper

import Swiper, {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);


// Burger
document.querySelector('.hamburger').addEventListener('click', event => {
    document.querySelector('.mobilemenu').classList.toggle('active')
})

const examplesSlider = new Swiper('.examples__slider .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    // spaceBetween: '30',
    navigation: {
        nextEl: '.examples__slider-buttons .swiper-button-next',
        prevEl: '.examples__slider-buttons .swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    }
})

$(() => {

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        }
    })


})