var link = document.querySelector(".form-container");
var popup = document.querySelector(".form-menu");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("form-show");
});