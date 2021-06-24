let words = ["elsa","shikha","itsAdi", "springSpoon","nishit","JtheGreat","Rxbh","Ironman"];

words =[...words, ...words];

const memoryGame = document.querySelector(".memoryGame");

for(let i = 0; i< 16; i++){
				let rand = Math.floor(Math.random()*(16-i));
				
				let memoryCard = document.createElement("div");
				memoryCard.classList.add("memoryCard")
				memoryCard.setAttribute("data-framework",words[rand]);
				
				let front = document.createElement("div");
				front.classList.add("front")
				front.innerHTML = "Hey!"
				
	 		let back = document.createElement("div");
	 		
	 		back.innerHTML = `<h2>${words[rand]}</h2>`;
	 		back.dataset.framework = words[rand]
	 		words.splice(rand,1);
			back.classList.add("back")
			back.style.backgroundColor	= "#6a78ff";			
				
		  memoryCard.appendChild(front);
		  memoryCard.appendChild(back);		  	
		 	memoryGame.appendChild(memoryCard);
}

//Algo starts here

let cards = document.querySelectorAll(".memoryCard");

let hasFlipped = false;
let lockCard = false;
let moves = 0;
let matches = 0;
let first,second;

function updateMoves(){
				let move = document.querySelector("#moves");
				move.innerHTML = moves;
}

function updateMatches(){
				let match = document.querySelector("#match");
				match.innerHTML = matches;
}


function flipCard(){
				if(lockCard) {
								return;
				}
				if(this === first) return;
				
				this.classList.add("flip");
				moves++;
				updateMoves();
				if(!hasFlipped) {
								hasFlipped = true;
								first = this;
								
				}else {
								hasFlipped = false;
								second = this;
								
								isMatch();
				}
				
}

function isMatch(){
			
				if(first.dataset.framework === second.dataset.framework) {			
				disableCards();
				}else {
								unflipCards();
				}
				youWon();
}


function disableCards(){
				lockCard = true;
				matches++;
				updateMatches();
				setTimeout(()=>{
								first.removeEventListener("click",flipCard);
								second.removeEventListener("click",flipCard);
								
								first.style.visibility = "hidden"
								second.style.visibility = "hidden"
								
								reset();
				},1000)
}


function unflipCards(){	
				lockCard = true;
				setTimeout(()=>{
								first.classList.remove("flip");
								second.classList.remove("flip");
								reset()
				},1000)
}


function reset(){
				[hasFlipped,lockCard] = [false,false];
				[first,second] = [null,null];
}

function youWon(){
				if(matches === 8) {
								alert("****Congratulations!! You won!****")
				}
}


cards.forEach(card =>				card.addEventListener("click", flipCard))
