
const container = document.querySelector(".container");
const booked = document.querySelector(".booked");
const notBooked = document.querySelector(".notBooked");

let book = 0;
booked.innerHTML = `Booked Seats :<br> ${book}`;
let unBook = 36;
notBooked.innerHTML = `Remaining Seats:<br> ${unBook}`;
for(let i= 0; i< 36; i++){
				let element = document.createElement("div");
				element.classList.add("box");				
				container.appendChild(element);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => box.addEventListener("click",() =>{
				
				if(box.classList.contains("active")) {
								box.classList.remove("active");
								book--;
								booked.innerHTML = `Booked Seats :<br> ${book}`;
								unBook++;
								notBooked.innerHTML = `Remaining Seats:<br> ${unBook}`;
								
				}else {
								box.classList.add("active");
								book++;
								booked.innerHTML = `Booked Seats :<br> ${book}`;
								unBook--;
								notBooked.innerHTML = `Remaining Seats:<br> ${unBook}`;
				}
}));
