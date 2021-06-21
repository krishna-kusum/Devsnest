const container = document.querySelector(".container");


const pixels = [130,131,149,150,151,152,168,169,170,171,172,173,187,188,190,191,193,194,207,208,209,210,211,212,213,214,229,232,248,250,251,253,267,269,272,274];

for(let i= 0; i< 400; i++){
				let element = document.createElement("div");
				element.classList.add("box");
				for(let j =0; j < pixels.length; j++){
				if(i === pixels[j]) {
								element.classList.add("active");
				}
}		
				container.appendChild(element);
}



const boxes = document.querySelectorAll(".box");

boxes.forEach(box => box.addEventListener("click",() =>{
				
				if(box.classList.contains("active")) {
								box.classList.remove("active");
				}else {
								box.classList.add("active");
				}
}));
