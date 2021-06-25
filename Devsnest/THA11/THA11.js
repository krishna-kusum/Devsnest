//getting required elements

const startPage = document.querySelector(".start-page");
const startBtn = startPage.querySelector(".start-btn");
const infoBox = startPage.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");

const quizBox = document.querySelector(".quiz_box");
const nextBtn = quizBox.querySelector(".total_qs .nxt_button")
let option_list = document.querySelector(".option_list")
let optionList = option_list.querySelectorAll(".option");

const resultBox = document.querySelector(".result_box")
const quitBtn = document.querySelector(".result_box .quit")
const replayBtn = document.querySelector(".result_box .restart")
const timerSec = quizBox.querySelector(".timer .timer_sec")


let qs
let ans
let option
let number = 0;
let lockQs = false;
let ans_text = document.createElement("div");
let totalQs = quizBox.querySelector(".total_qs");
let score = 0;
let counter;
let timerValue = 15;



function updateScore(){
				let scoreText = document.querySelector(".result_box .score_text .score");
				scoreText.innerHTML = score;
}


let qsNo = 0;

function updateQsNo(){
				let qs_no = document.querySelector(".total_qs #qs_no")
				qs_no.innerHTML = qsNo;
}



startBtn.addEventListener("click",()=>{
				startBtn.classList.add("inactiveStartBtn");
				infoBox.classList.add("activeInfo");
})

exitBtn.addEventListener("click",()=>{
				infoBox.classList.remove("activeInfo");
				startBtn.classList.remove("inactiveStartBtn");
})

continueBtn.addEventListener("click",()=>{
				infoBox.classList.remove("activeInfo");
				quizBox.classList.add("activeQuiz");
				updateScore();
				showQsDetails();
				selectOption();	
				clearInterval(counter)
				startTimer(timerValue)			
})

nextBtn.addEventListener("click", nextQuestion);

replayBtn.addEventListener("click",replayQuiz
)


quitBtn.addEventListener("click",()=>{
				resultBox.classList.remove("activeResult")
				startBtn.classList.remove("inactiveStartBtn")
})



// questions

let questions = [{
				question: "What does HTML stand for?",
				answer: "Hyper Text Markup Language",
				options: [
								"Hyper Text Multiple Language",
								"Hyper Text Markup Language",
								"Hyper Text Preprocessor",
								"Hyper Text Multi Language"
				]
},
{
				question: "What does CSS stand for?",
				answer: "Cascaded Style Sheet",
				options: [
								"Common Style Sheet",
								"Computer Style Sheet",
								"Colorful Style Sheet",
								"Cascaded Style Sheet"
				]
},
{
				question: "What does SQL stand for?",
				answer: "Structured Query Language",
				options: [
								"Stylesheet Question Language",
								"Statement Query Language",
								"Structured Question Language",
								"Structured Query Language"
				]
},
{
				question: "What does XML stand for?",
				answer: "eXtensible Markup Language",
				options: [								
								"eXecutable Multiple Programming",
								"eXtensible Markup Language",
								"eXtra-Multi Program Language",
								"eXamine Multiple Language"
				]
},
{
				question: "What does PHP stand for?",
				answer: "HyperText Preprocessor",
				options: [
								"HyperText Preprocessor",
								"HyperText Programming",
								"HyperText Preprogramming",
								"HomeText Preprocessor"
				]
}
]
// show Qs Details

function showQsDetails(callback = null){
					qsNo++;
					updateQsNo();			
															
				if(callback) {
							callback();	
							
							setTimeout(()=>{
								reset();
								let rand = Math.floor(Math.random()*(5-number));
				
				qs = questions[rand].question
				ans = questions[rand].answer
				option = questions[rand].options
				let quizQs = document.querySelector(".quiz_qs");
				quizQs.innerHTML = `<span>${qs}</span>`;
				let optionList = document.querySelectorAll(".option");				
				optionList[0].innerHTML = `<span>${option[0]}</span>`
			
							optionList[1].innerHTML = `<span>${option[1]}</span>`
				optionList[2].innerHTML = `<span>${option[2]}</span>`
				optionList[3].innerHTML = `<span>${option[3]}</span>`
				questions.splice(rand,1);
				
				},1000);
				
				return;
				}
				let rand = Math.floor(Math.random()*(5-number));					
								
				qs = questions[rand].question
				ans = questions[rand].answer				
				option = questions[rand].options
				
				let quizQs = document.querySelector(".quiz_qs");
				quizQs.innerHTML = `<span>${qs}</span>`;
				
				let optionList = document.querySelectorAll(".option");				
				optionList[0].innerHTML = `<span>${option[0]}</span>`
		//		console.log(optionList[0].innerHTML)
							optionList[1].innerHTML = `<span>${option[1]}</span>`
				optionList[2].innerHTML = `<span>${option[2]}</span>`
				optionList[3].innerHTML = `<span>${option[3]}</span>`
				questions.splice(rand,1);
			
}


//select option

function selectOption(){
				
optionList.forEach(option =>{

				
				option.addEventListener("click", showAnswer);
				
																																	
})
}


//show Answer

function showAnswer(){
							
					clearInterval(counter);
						//	console.log(this.innerHTML)
								getAnswer();
								optionList.forEach(option =>{

				option.classList.add("disable");
																																	
})
								
								if(this.innerText === ans) {
															
								score++;
								updateScore();
								//alert(score)								
								return;
								}												
}

//getAnswer

function getAnswer(){
				
				ans_text.innerHTML = `<h2>${ans}</h2>`;				
				totalQs.appendChild(ans_text);
				ans_text.style.visibility = "visible";
			//	totalQs.insertBefore(ans_text,nextBtn); => throwing an error
		
			
			 for(i = 0; i < optionList.length; i++){
			 
			 				if(optionList[i].innerText === ans){			 				
			 optionList[i].classList.add("correct");
							}else {							
											optionList[i].classList.add("incorrect");
							}
			 }												
}

//next question

function nextQuestion(){
				if(number === 4) {					
					
					showAnswer();
					
					setTimeout(()=>{
									quizBox.classList.remove("activeQuiz")
								resultBox.classList.add("activeResult");
					},1000)	
								return;
						
				}
				if(number === 3) {
								quizBox.querySelector(".total_qs .nxt_button").innerHTML = `<button>END</button>	`;
				}
				
				reset();				
				showQsDetails(getAnswer);
				selectOption();						
				number++;
				
				clearInterval(counter)
				startTimer(timerValue)
}

//start timer 

function startTimer(time){
				counter = setInterval(timer, 1000)
				function timer(){
							time--;
							if(time === 0) {
						//	clearInterval(counter);						
							nextQuestion()	;							
							//return
				}
							timerSec.textContent = time;	
							
							
				}
				
}


//Reset

function reset(){
				lockQs = false
				[qs,ans,option] = [null,null,null]
				ans_text.style.visibility = "hidden";
		//		ans_text.classList.add(".hide_answer")
				for(i = 0; i < optionList.length; i++){
			 
			 				if(optionList[i].innerText === ans){			 				
			 optionList[i].classList.remove("correct");
							}else {							
											optionList[i].classList.remove("incorrect");
							}
							optionList[i].classList.remove("disable")
			 }
}


//Replay Quiz

function replayQuiz(){
				resultBox.classList.remove("activeResult")
				infoBox.classList.add("activeInfo");
				number = 0;
				qsNo = 0;
				quizBox.querySelector(".total_qs .nxt_button").innerHTML = `<button>NEXT</button>	`;
				score = 0;
				updateScore();
				reset();
				questions = [{
				question: "What does HTML stand for?",
				answer: "Hyper Text Markup Language",
				options: [
								"Hyper Text Multiple Language",
								"Hyper Text Markup Language",
								"Hyper Text Preprocessor",
								"Hyper Text Multi Language"
				]
},
{
				question: "What does CSS stand for?",
				answer: "Cascaded Style Sheet",
				options: [
								"Common Style Sheet",
								"Computer Style Sheet",
								"Colorful Style Sheet",
								"Cascaded Style Sheet"
				]
},
{
				question: "What does SQL stand for?",
				answer: "Structured Query Language",
				options: [
								"Stylesheet Question Language",
								"Statement Query Language",
								"Structured Question Language",
								"Structured Query Language"
				]
},
{
				question: "What does XML stand for?",
				answer: "eXtensible Markup Language",
				options: [								
								"eXecutable Multiple Programming",
								"eXtensible Markup Language",
								"eXtra-Multi Program Language",
								"eXamine Multiple Language"
				]
},
{
				question: "What does PHP stand for?",
				answer: "HyperText Preprocessor",
				options: [
								"HyperText Preprocessor",
								"HyperText Programming",
								"HyperText Preprogramming",
								"HomeText Preprocessor"
				]
}
]
}
