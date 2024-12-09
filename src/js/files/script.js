// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener('DOMContentLoaded', () => {
	const firstBlock = document.querySelector('.box-screen._first');
	const level1Block = document.querySelector('.box-screen._level-1');
	const level2Block = document.querySelector('.box-screen._level-2');
	const level3Block = document.querySelector('.box-screen._level-3');
	const level4Block = document.querySelector('.box-screen._level-4');
	const animationImg = document.querySelector('.main-screen__animation-img');
	const label1 = document.querySelector('.label-screen_1');
	const label2 = document.querySelector('.label-screen_2');
	const label3 = document.querySelector('.label-screen_3');
	const label4 = document.querySelector('.label-screen_4');
	const aboutSection = document.querySelector('.page__about');
	const infoSection = document.querySelector('.page__info');
	const footerSection = document.querySelector('.footer');
	const infoInner = document.querySelector('.info__inner');
	
	setTimeout(() => {
			firstBlock.style.width = '35.83%';
	}, 1500);
	
	let scrollStep = 0;
	let isAnimating = false;

	function animateStep(step) {
			isAnimating = true;
			switch (step) {
					case 1:
							level1Block.classList.add('active');
							animationImg.style.transform = 'translateY(-100%)';
							animationImg.style.opacity = '0';
							label1.classList.add('active');
							break;
					case 2:
							level2Block.classList.add('active');
							label2.classList.add('active');
							break;
					case 3:
							level3Block.classList.add('active');
							label3.classList.add('active');
							break;
					case 4:
							level4Block.classList.add('active');
							label4.classList.add('active');
							break;
					case 5:
							aboutSection.style.transform = 'translateY(0)';
							aboutSection.style.transition = 'transform 1.5s ease';
							break;
					case 6:
							infoSection.style.transform = 'translateY(0)';
							infoSection.style.transition = 'transform 1.5s ease';
							break;
					case 7:
							infoInner.style.transform = 'translateX(-31%)';
							break;
					case 8:
							footerSection.style.transform = 'translateY(0)';
							footerSection.style.transition = 'transform 1.5s ease';
							break;
			}
			setTimeout(() => {
					isAnimating = false;
			}, 1000); 
	}

	function reverseAnimateStep(step) {
			isAnimating = true;
			switch (step) {
					case 8:
							footerSection.style.transform = 'translateY(100%)';
							break;
					case 7:
							infoInner.style.transform = 'translateX(0)';
							break;
					case 6:
							infoSection.style.transform = 'translateY(100%)';
							break;
					case 5:
							aboutSection.style.transform = 'translateY(100%)';
							break;
					case 4:
							level4Block.classList.remove('active');
							label4.classList.remove('active');
							break;
					case 3:
							level3Block.classList.remove('active');
							label3.classList.remove('active');
							break;
					case 2:
							level2Block.classList.remove('active');
							label2.classList.remove('active');
							break;
					case 1:
							level1Block.classList.remove('active');
							animationImg.style.transform = 'translateY(0)';
							animationImg.style.opacity = '1';
							label1.classList.remove('active');
							break;
			}
			setTimeout(() => {
					isAnimating = false;
			}, 1000); 
	}

	window.addEventListener('wheel', (event) => {
			if (isAnimating) return;

			if (event.deltaY > 0) {
					// Прокрутка вниз
					if (scrollStep < 8) {
							scrollStep++;
							animateStep(scrollStep);
					}
			} else {
					// Прокрутка вверх
					if (scrollStep > 0) {
							reverseAnimateStep(scrollStep);
							scrollStep--;
					}
			}
	});
});