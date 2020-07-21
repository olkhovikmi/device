const checkbox = document.querySelector('#plus-checkbox'),
	innerCatalog = document.querySelector('.inner-catalog');

checkbox.addEventListener('click', function () {
	if (innerCatalog.style.paddingBottom == '') {
		innerCatalog.style.paddingBottom = '160px';
	}
});
