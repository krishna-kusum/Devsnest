//selecting elements

const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")
const addItem = document.getElementById("add")

//class names
const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const lineThrough = "lineThrough";

//add Date
const options ={
				weekday: "long",
				month: "short",
				day : "numeric"
}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-us", options)

//add variables
let id, List;

//getItem from Local Storage
let data = localStorage.getItem("toDo")
//console.log(data)

// check if data is not null
if(data) {
				List = JSON.parse(data)
				id = List.length
				loadList(List) //Load List to user interface
				
}else {
			id = 0;
			List = []	
}

//function to load list

function loadList(array){
				
				array.forEach((item) =>{
								
					//console.log(item.name, item.id, item.done, item.trash)		
						toDo(item.name, item.id, item.done, item.trash)
				})
}


//clear the local storage
clear.addEventListener("click", ()=>{
				localStorage.clear();
				location.reload();
})
//setItem to local Storage
//localStorage.setItem("List", JSON.stringify(List));



//add item 
addItem.addEventListener("click", ()=>{
				let todo = input.value;
				if(todo) {
								toDo(todo, id, false, false);
				List.push({
								name: todo,
								id: id,
								done: false,
								trash: false
				});
				localStorage.setItem("toDo", JSON.stringify(List));
				id++;
				}
				
				input.value ="";
})


// add Todo function
function toDo(toDo, id, done, trash){

				if(trash) {
								return;
				}
				let Done = done ? check : uncheck;
				let line = done ? lineThrough : "";
				let item = `<li class="item">
				<i class="fa ${Done} co" job="complete" id="${id}"></i>
																	<p class="text ${line}" >${toDo}</p>		
																	<i class="fa fa-trash-o de" job="delete" id="${id}"></i>
																	</li>`;
																	
				position = "beforeend";
				
				
				list.insertAdjacentHTML(position, item);
}

//toDo("drink Coffee", 1, false, false)


//complete to-do

function completeToDo(element){
				element.classList.toggle(check);
				element.classList.toggle(uncheck);
				
				element.parentNode.querySelector(".text").classList.toggle("lineThrough");
			//	console.log(element.id)
				List[element.id].done = List[element.id].done ? false : true;
				
}


//remove toDo function

function removeToDo(element){
				element.parentNode.parentNode.removeChild(element.parentNode);
				
				List[element.id].trash = true;
}

list.addEventListener("click", (e)=>{
				let element = e.target;
			//	console.log(element)
				let elementJob = element.attributes.job.value;
				if(elementJob === "complete") {
								completeToDo(element)
				}
				if(elementJob === "delete") {
								removeToDo(element)
				}
				
				localStorage.setItem("toDo", JSON.stringify(List));
})
