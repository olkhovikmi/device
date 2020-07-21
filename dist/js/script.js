const write = document.querySelector('.contact-link'),
	body = document.querySelector('.body'),
	popup = document.querySelector('.popup'),
	closePop = document.querySelector('.popup__close'),
	checkbox = document.querySelector('#plus-checkbox'),
	innerCatalog = document.querySelector('.inner-catalog');

write.addEventListener('click', function () {
	if (popup.style.display == '') {
		popup.style.display = 'block';
	}
});

closePop.addEventListener('click', function () {
	if (popup.style.display == 'block') {
		popup.style.display = '';
	}
});

