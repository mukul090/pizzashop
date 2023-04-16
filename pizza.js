var swiper = new Swiper(".family-slide", {
    loop: true,

    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 3,
        },
    },


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction"
    },

    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});


$(document).ready(function() {
    $('.btn').click(function() {
        const value = $(this).attr('data-filter');

        if (value == 'special-products') {
            $('.box').show('1000');
        } else {
            $('.box').not('.' + value).hide('1000');
            $('.box').filter('.' + value).show('1000');
        }
    })
    $('.btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })
})



search = document.querySelector('#search');
searchbox = document.querySelector('.search-box');


search.onclick = () => {
    search.classList.toggle('#search');
    searchbox.classList.toggle('active');
}



user = document.querySelector('#user');
account = document.querySelector('.account');


user.onclick = () => {
    user.classList.toggle('#user');
    account.classList.toggle('active');
}

cart = document.querySelector('#cart');
item = document.querySelector('.item');


cart.onclick = () => {
    cart.classList.toggle('#cart');
    item.classList.toggle('active');
}


var swiper = new Swiper(".home-slide", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

});

bar = document.querySelector('#bar');
box1 = document.querySelector('.box1');
back = document.querySelector('#back');


bar.onclick = () => {
    bar.classList.toggle('#bar');
    box1.classList.toggle('active');

}

back.onclick = () => {
    back.classList.remove('#back');
    box1.classList.remove('active');

}


plus = document.querySelector('#plus');
salad = document.querySelector('.salad');


plus.onclick = () => {
    plus.classList.toggle('#plus');
    salad.classList.toggle('active');
}



angleicon = document.querySelector('.angle-icon');
bestbox = document.querySelector('.best-box');


angleicon.onclick = () => {
    angleicon.classList.toggle('.angle-icon');
    bestbox.classList.toggle('active');
}