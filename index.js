// Styles
import './src/sass/main.sass'

// import Swiper styles
import 'swiper/swiper-bundle.min.css';


// fancybox
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'
import '@fancyapps/fancybox'


// Swiper

import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, EffectFade]);


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
        el: '.examples__slider .swiper-pagination'
    }
})

const typesPicturesSlider = new Swiper('.types-slider__pictures .swiper-container', {
    slidesPerView: '1',
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.types-slider__buttons .swiper-button-next',
        prevEl: '.types-slider__buttons .swiper-button-prev'
    },
    pagination: {
        el: '.types-slider .swiper-pagination'
    }
})


const typesTextSlider = new Swiper('.types-slider__text .swiper-container', {
    slidesPerView: '1',
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.types-slider__buttons .swiper-button-next',
        prevEl: '.types-slider__buttons .swiper-button-prev'
    },
    pagination: {
        el: '.types-slider .swiper-pagination'
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