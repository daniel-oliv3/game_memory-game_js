(function(){
	var images = [];

	for(var i = 0; i < 16; i++){
		var img = {
			src: "img/"+ i +".jpg",
			id: i%8	
		};
		images.push(img);
	}


	//chama a função de inicialização do jogo
	startGame();
	
	//função de inicialização do jogo
	function startGame(){
		images = randomSort(images);

		var frontFaces = document.getElementsByClassName("front");

		//posicionamento das cartas
		for(var i = 0; i < 16; i++){
			var card = document.querySelector("#card" + i);
			card.style.left = (i % 8 === 0) ? 5 + "px" : (i % 8) * 165 + 5 + "px";
			card.style.top = i < 8 ? 5 + "px" : 250 + "px";

            card.addEventListener("click", flipCard, false);

			frontFaces[i].style.background = "url('"+ images[i].src +"')";
			frontFaces[i].setAttribute("id",images[i].id);
			console.log(frontFaces[i].id);
		}
	}

	//função embaralhar as cartas
	function randomSort(oldArray){
		//console.log(Math.floor(Math.random()*11));
		//var arrTeste = ["shape", "truck", "rolamento", "lixa", "rodas"];
		//console.log(arrTeste.length);

		var newArray = [];

		while(newArray.length !== oldArray.length){
			var i = Math.floor(Math.random()*oldArray.length);

			if(newArray.indexOf(oldArray[i]) < 0){
				newArray.push(oldArray[i]);
			}
		}
		return newArray;
	}

    //Rotacionando as Cartas
    function flipCard(){
        var faces = this.getElementsByClassName("face");
        faces[0].classList.toggle("flipped");
        faces[1].classList.toggle("flipped");
        
    }
}());