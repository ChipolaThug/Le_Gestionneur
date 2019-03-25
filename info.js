/*
chambre1 = new Salle(chambre1,chambre,[],5,5);
chambre2 = new Salle(chambre2,chambre,[],5,5);
cuisine = new Salle(cuisine,classique,[],5,5);
sejour = new Salle(sejour,classique,[],5,5);
salleDeBain = new Salle(SalleDeBain,sdb,[],5,5);
toilette = new Salle(toilette, sdb,[],5,5);
garage = new Salle(garage, classique,[],5,5);
*/

page1 = "/C:/Users/Timothe/Desktop/ISI%2024-03/page1.html";
page2 = "/C:/Users/Timothe/Desktop/ISI%2024-03/page2.html";

window.addEventListener("load", function () {

	var actionChangeLabelEtType = function (ev) {
		//var div = ev.currentTarget;
		var div = document.getElementById("BtnChangeType");
		let type = div.innerHTML;
		if(type == "type1"){
			div.innerHTML = "type2";
			div.style.backgroundColor = "red";
		}
		else{
			div.innerHTML = "type1";
			div.style.backgroundColor = "green";
		}
	};
	if (document.location.pathname == page2){
		var d = document.getElementById("BtnChangeType");
		d.addEventListener("click", actionChangeLabelEtType);
	}
	/*var changePage = function (ev) {
		//var div = ev.currentTarget;*
		var loca = document.location.pathname;
		console.log(loca);
		if(loca == page2){
			document.location = page1;
		}
		else if(loca == page1){
			document.location = page2;
		}
	};
	
	var p = document.getElementById("BtnChangePage");
	p.addEventListener("click", changePage);*/
	
});