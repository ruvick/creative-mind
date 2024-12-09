// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

// document.addEventListener('DOMContentLoaded', () => {
// 	const firstBlock = document.querySelector('.box-screen._first');
// 	const level1Block = document.querySelector('.box-screen._level-1');
// 	const level2Block = document.querySelector('.box-screen._level-2');
// 	const level3Block = document.querySelector('.box-screen._level-3');
// 	const level4Block = document.querySelector('.box-screen._level-4');
// 	const animationImg = document.querySelector('.main-screen__animation-img');
// 	const label1 = document.querySelector('.label-screen_1');
// 	const label2 = document.querySelector('.label-screen_2');
// 	const label3 = document.querySelector('.label-screen_3');
// 	const label4 = document.querySelector('.label-screen_4');
// 	const aboutSection = document.querySelector('.page__about');
// 	const infoSection = document.querySelector('.page__info');
// 	const footerSection = document.querySelector('.footer');
	
// 	// Изменяем ширину блока _first через 3 секунды
// 	setTimeout(() => {
// 			firstBlock.style.width = '35.83%';
// 	}, 1500);
	
// 	let scrollStep = 0;
	
// 	window.addEventListener('wheel', (event) => {
// 			if (event.deltaY > 0) {
// 			 // Прокрутка вниз
// 			 scrollStep++;
// 			 if (scrollStep === 1) {
// 					level1Block.classList.add('active');
// 					animationImg.style.transform = 'translateY(-100%)';
// 					animationImg.style.opacity = '0';
// 					label1.classList.add('active');
// 			 }
// 			 if (scrollStep === 2) {
// 					level2Block.classList.add('active');
// 					label2.classList.add('active');
// 			 }
// 			 if (scrollStep === 3) {
// 					level3Block.classList.add('active');
// 					label3.classList.add('active');
// 			 }
// 			 if (scrollStep === 4) {
// 					level4Block.classList.add('active');
// 					label4.classList.add('active');
// 			 }
// 			 if (scrollStep === 5) {
// 					aboutSection.style.transform = 'translateY(0)';
// 					aboutSection.style.transition = 'transform 1.5s ease';
// 			 }
// 			 if (scrollStep === 6) {
// 					infoSection.style.transform = 'translateY(0)';
// 					infoSection.style.transition = 'transform 1.5s ease';
// 			 }
// 			 if (scrollStep === 7) {
// 					footerSection.style.transform = 'translateY(0)';
// 					footerSection.style.transition = 'transform 1.5s ease';
// 			 }
// 			} else {
// 			 // Прокрутка вверх
// 			 if (scrollStep === 7) {
// 					footerSection.style.transform = 'translateY(100%)';
// 			 }
// 			 if (scrollStep === 6) {
// 					infoSection.style.transform = 'translateY(100%)';
// 			 }
// 			 if (scrollStep === 5) {
// 					aboutSection.style.transform = 'translateY(100%)';
// 			 }
// 			 if (scrollStep === 4) {
// 					level4Block.classList.remove('active');
// 					label4.classList.remove('active');
// 			 }
// 			 if (scrollStep === 3) {
// 					level3Block.classList.remove('active');
// 					label3.classList.remove('active');
// 			 }
// 			 if (scrollStep === 2) {
// 					level2Block.classList.remove('active');
// 					label2.classList.remove('active');
// 			 }
// 			 if (scrollStep === 1) {
// 					level1Block.classList.remove('active');
// 					animationImg.style.transform = 'translateY(0)';
// 					animationImg.style.opacity = '1';
// 					label1.classList.remove('active');
// 			 }
// 			 if (scrollStep > 0) {
// 					scrollStep--;
// 			 }
// 			}
// 	});
// 	});

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
	const resultInfo = document.querySelector('.result-info');
	const infoSupport = document.querySelector('.info__support');
	
	setTimeout(() => {
			firstBlock.style.width = '35.83%';
	}, 1500);
	
	let scrollStep = 0;
	
	window.addEventListener('wheel', (event) => {
			if (event.deltaY > 0) {
			 // Прокрутка вниз
			 scrollStep++;
			 if (scrollStep === 1) {
					level1Block.classList.add('active');
					animationImg.style.transform = 'translateY(-100%)';
					animationImg.style.opacity = '0';
					label1.classList.add('active');
			 }
			 if (scrollStep === 2) {
					level2Block.classList.add('active');
					label2.classList.add('active');
			 }
			 if (scrollStep === 3) {
					level3Block.classList.add('active');
					label3.classList.add('active');
			 }
			 if (scrollStep === 4) {
					level4Block.classList.add('active');
					label4.classList.add('active');
			 }
			 if (scrollStep === 5) {
					aboutSection.style.transform = 'translateY(0)';
					aboutSection.style.transition = 'transform 1.5s ease';
			 }
			 if (scrollStep === 6) {
					infoSection.style.transform = 'translateY(0)';
					infoSection.style.transition = 'transform 1.5s ease';
					resultInfo.style.transform = 'translateX(100%)';
					// resultInfo.style.opacity = '0';
					resultInfo.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
					infoSupport.style.transform = 'translateX(0)';
					// infoSupport.style.opacity = '1';
					infoSupport.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
			 }
			 if (scrollStep === 7) {
					resultInfo.style.transform = 'translateX(0)';
					resultInfo.style.width = '100%';
					// resultInfo.style.opacity = '1';
					infoSupport.style.transform = 'translateX(-100%)';
					// infoSupport.style.opacity = '0';
					infoSupport.style.width = '100%';
			 }
			 if (scrollStep === 8) {
					footerSection.style.transform = 'translateY(0)';
					footerSection.style.transition = 'transform 1.5s ease';
			 }
			} else {
			 // Прокрутка вверх
			 if (scrollStep === 8) {
					footerSection.style.transform = 'translateY(100%)';
			 }
			 if (scrollStep === 7) {
					resultInfo.style.transform = 'translateX(100%)';
					resultInfo.style.opacity = '0';
					infoSupport.style.transform = 'translateX(0)';
					infoSupport.style.opacity = '1';
			 }
			 if (scrollStep === 6) {
					infoSection.style.transform = 'translateY(100%)';
			 }
			 if (scrollStep === 5) {
					aboutSection.style.transform = 'translateY(100%)';
			 }
			 if (scrollStep === 4) {
					level4Block.classList.remove('active');
					label4.classList.remove('active');
			 }
			 if (scrollStep === 3) {
					level3Block.classList.remove('active');
					label3.classList.remove('active');
			 }
			 if (scrollStep === 2) {
					level2Block.classList.remove('active');
					label2.classList.remove('active');
			 }
			 if (scrollStep === 1) {
					level1Block.classList.remove('active');
					animationImg.style.transform = 'translateY(0)';
					animationImg.style.opacity = '1';
					label1.classList.remove('active');
			 }
			 if (scrollStep > 0) {
					scrollStep--;
			 }
			}
	});
	});