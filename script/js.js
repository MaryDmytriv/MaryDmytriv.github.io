function showText (el) {
	 if(el.previousElementSibling.clientHeight === 95) {
	 	el.previousElementSibling.style.height = "100%";
	 	el.innerHTML = "Звернути...";
	 } else {
	 	el.previousElementSibling.style.height = "95px";
	 	el.innerHTML = "Детальніше...";
	 }
	 }
 