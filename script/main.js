const timer = document.querySelector('.timer p:last-child');
const sliderBtns = document.querySelector('.slider-buttons');
const slide = document.querySelector('.slide');
const footerBtns = document.querySelector('.footer-buttons');
const sizeBtn = document.querySelector('.size button');
const colorBtn = document.querySelector('.color button');

let hours = 4;
let min = 51;
let sec = 5;

setInterval(() => {
	sec -= 1;
	if (sec === 0) {
		min -= 1;
		sec = 59;
	}
	if (min === 0) {
		hours -= 1;
		min = 59;
	}

	timer.innerHTML = `${hours < 10 ? '0' + hours : hours}:${
		min < 10 ? '0' + min : min
	}:${sec < 10 ? '0' + sec : sec}`;
}, 1000);

sliderBtns.addEventListener('click', (event) => {
	console.log(event.target.tagName);
	if (event.target.tagName == 'IMG') {
		slide.style.background = `url(${event.target.src}) center/cover no-repeat`;
	}
});

footerBtns.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
        let classes = [...event.target.classList]
		if (!classes.includes('active')) {
			event.target.classList.add('active');
		} else {
			event.target.classList.remove('active');
		}
	}

	if (event.target.tagName == 'LI') {
		let id = event.target.parentElement.id;
		if (id === 'color') {
			colorBtn.innerHTML = `${event.target.innerText}
            <img src="./assets/arrow.svg" alt="" />`;
            colorBtn.classList.remove('active')
		} else if(id === 'size'){
            sizeBtn.innerHTML = `${event.target.innerText}
            <img src="./assets/arrow.svg" alt="" />`;
            sizeBtn.classList.remove('active')
        }
	}
});
