var btnDesign = document.getElementById("btn-design");
var btnCode = document.getElementById("btn-code");
var contentDesign = document.getElementById("content-design");
var contentCode = document.getElementById("content-code");

btnDesign.addEventListener("click", function(e) {
    event.preventDefault();
    updateView("design");
});

btnCode.addEventListener("click", function(e) {
    event.preventDefault();
    updateView("code");
});

function updateView(status) {
	if(status === "design") {
		manageBtns(btnDesign, btnCode);
		toggleDivs(contentDesign);
		toggleDivs(contentCode);
	} else if (status === "code") {
		manageBtns(btnCode, btnDesign);
		toggleDivs(contentDesign);
		toggleDivs(contentCode);
	}
}

function toggleDivs(coll) {
	// for (var i = 0; i < coll.length; i++) {
	// 	coll[i].classList.toggle("hide");
	// }
	coll.classList.toggle("hide");
}

function manageBtns(btnSet, btnRemove){
	btnSet.setAttribute("disabled", "");
	btnSet.classList.add("homeTab-disabled");
	btnRemove.removeAttribute("disabled");
	btnRemove.classList.remove("homeTab-disabled");
}