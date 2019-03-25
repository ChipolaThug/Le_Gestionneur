var data1 = '{"piece":[' +
'["garage","120"," 100", "400"," 200","lum1","chauf1","eau1","electro1"],' +
'["sejour", "20", "300", "320", "220","lum2","chauf2","eau2","electro2"],' +
'["chambre", "340"," 300"," 100", "220","lum3","chauf3","eau3","electro3"],' +
'["toilette", "440", "300", "80", "55","lum4","chauf4","eau4","electro4"],' +
'["lingerie", "440", "355"," 80", "165","lum5","chauf5","eau5","electro5"]]}';

//'{"nom":"","x":"","y":"","width":"","height":"","lum":"","chauf":"","eau":"","elec":"" },' +


/*data = '[{ "piece": [
	["garage","120"," 100", "400"," 200","lum1","chauf1","eau1","electro1"],
	["sejour", "20", "300", "320", "220","lum2","chauf2","eau2","electro2"],
	["chambre", "340"," 300"," 100", "220","lum3","chauf3","eau3","electro3"],
	["toilette", "440", "300", "80", "55","lum4","chauf4","eau4","electro4"],
	["lingerie", "440", "355"," 80", "165","lum5","chauf5","eau5","electro5"]]}]
*/
var datas = JSON.parse(data1);

console.log("data " +  datas.piece); 

window.addEventListener("load", function () {

	var canv = document.getElementById("canvas");
	var ctx = canv.getContext("2d");

	
/*	avant

	var garage = ["garage", 120, 100, 400, 200];
	var sejour = ["sejour", 20, 300, 320, 220];
	var chambre = ["chambre", 340, 300, 100, 220];
	var toilette = ["toilette", 440, 300, 80, 55];
	var lingerie = ["lingerie", 440, 355, 80, 165];
	var maison = [ garage, sejour, chambre, toilette, lingerie];
*/	

	// on construit un tableau de salles (la maison)
	var maison = [datas.piece.length];
	for(var i = 0; i< datas.piece.length; i++){
		var p = new Salle(datas.piece[i][0],
					datas.piece[i][1],
					datas.piece[i][2],
					datas.piece[i][3],
					datas.piece[i][4],
					datas.piece[i][5],
					datas.piece[i][6],
					datas.piece[i][7],
					datas.piece[i][8])
		maison[i] = p;
		console.log(maison[i]);
	}
/*	avant

	function draw(piece){
		var nom = piece[0];
		var x = piece[1];
		var y = piece[2];
		var w = piece[3];
		var h = piece[4];
		ctx.rect(x,y,w,h);
		ctx.font = "Arial";
		ctx.strokeStyle = "blue";
		ctx.fillText(nom, x+w/2-20,y+h/2);
		ctx.stroke();
	}
*/
	function draw(piece){
		var nom = piece.get_nom();
		console.log("nom : " + nom);
		var x = piece.get_x();
		console.log("x : " + x);
		var y = piece.get_y();
		console.log("y : " + y);
		var w = piece.get_width();
		console.log("w : " + w);
		var h = piece.get_height();
		console.log("h : " + h);
		ctx.rect(x,y,w,h);
		ctx.font = "Arial";
		ctx.strokeStyle = "black";
		console.log("posX : " + (parseInt(x)+parseInt(w)/2-20));
		console.log("posY : " + (parseInt(y)+parseInt(h)/2));
		ctx.fillText(nom, (parseInt(x)+parseInt(w)/2-20),parseInt(y)+parseInt(h)/2); //ca ne marche pas, mais je vois pas pourquoi puisque ca marchais avant le passage en "salle"
		ctx.stroke();
	}

	function drawAll(maison){
		maison.forEach(draw);
	}

	drawAll(maison);
	console.log(maison);

	});