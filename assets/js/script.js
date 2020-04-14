const nav = document.querySelector('.nav');
const navA = document.querySelectorAll('.nav a');
const header = document.querySelector('.header');
const skill = document.querySelector('.skill');
const workExperience = document.querySelector('.workExperience');

$(document).ready(function () {

    $('.year').html(new Date().getFullYear());
    const time = new Date().getHours();
    console.log(time);
    if (time == 18) {
        navA.forEach(data => data.classList.toggle('darkText'));
        header.classList.toggle('darkMode');
        nav.classList.toggle('darkMode');
        skill.classList.toggle('darkMode');
        workExperience.classList.toggle('darkMode');
    }
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        disableScrolling: true,
        alwaysShowNavOnTouchDevices: true,

    });

    // });
    $('.pageScroll').on('click', function (e) {
        const href = $(this).attr('href');
        const hrefTo = $(href);
        console.log(hrefTo);
        $('html, body').animate({
            scrollTop: parseInt(hrefTo.offset().top) - 50
        }, 1000, 'easeInOutExpo');

        e.preventDefault();
    });

    // $('#scroll').on('click', function () { 

    // });

});

const scroll = document.querySelector('#scroll');
const logo = document.querySelector('.logo');
var prevScrollpos = window.pageYOffset;

function logos() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        logo.innerHTML = 'Faisalachmaddc';
        logo.style.transisiton = 'all 0.3s ease-in-out';
    } else {
        logo.innerHTML = 'F.';

    }
    prevScrollpos = currentScrollPos;

}
function scrolling() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        scroll.style.display = 'block';
        scroll.style.bottom = '1rem';
    } else {
        scroll.style.display = 'block';
        scroll.style.bottom = '-3rem';
    }
}

function shadow() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.style.boxShadow = "0px 2px 10px #B19662"
    } else {
        nav.style.boxShadow = "none"
    }

}
window.onscroll = function () {
    scrolling();
    logos();
    shadow()
}

scroll.addEventListener('click', function () {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    $('html, body').animate({
        scrollTop: 0
    }, 1000, 'easeInOutExpo');
});

