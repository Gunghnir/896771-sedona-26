var link = document.querySelector(".form-name");
var popup = document.querySelector(".form-container");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-show");
});