const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1600: {
			slidesPerView: 7,
		},
		1130: {
			slidesPerView: 6,
		},
		900: {
			slidesPerView: 5,
		},
		745: {
			slidesPerView: 4,
		},
		620: {
			slidesPerView: 3,
		},
		350: {
			slidesPerView: 2,
		},
	}
})


// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIconAct = document.querySelector('.menu-icon-act');
const menuBurger = document.querySelectorAll('.menu-icon')


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	nav.classList.toggle('header__main-active')
	menuIconAct.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
	menuBurger.forEach(element => {
		element.classList.toggle('_active');
	});
};
