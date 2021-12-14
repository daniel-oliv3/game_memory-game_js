(function(){
	var images = [];

	var flippedCards = [];

	var modalGameOver = document.querySelector("#modalGameOver");

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
		flippedCards = [];
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
		modalGameOver.style.zIndex = -2;
		modalGameOver.removeEventListener("click", startGame, false);
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
		if(flippedCards.length < 2){
			var faces = this.getElementsByClassName("face");

			if(faces[0].classList.length > 2){
				return;
			}

			faces[0].classList.toggle("flipped");
			faces[1].classList.toggle("flipped");

			flippedCards.push(this);
		}else{
			flippedCards[0].childNodes[1].classList.toggle("flipped");
			flippedCards[0].childNodes[3].classList.toggle("flipped");
			flippedCards[1].childNodes[1].classList.toggle("flipped");
			flippedCards[1].childNodes[3].classList.toggle("flipped");

			flippedCards = [];
		}

    }

	window.setTimeout(function(){
		gameOver();
	}, 1000);

	function gameOver(){
		modalGameOver.style.zIndex = 10;
		modalGameOver.addEventListener("click", startGame, false);
	}
}());