/*integrate 
shadow
face
fan
foot
front
head
card
corner
hand
middle

a =document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
e = document.getElementById("slot4");
f = document.getElementById("slot5");
g = document.getElementById("slot6");
h = document.getElementById("slot7");
i = document.getElementById("slot8");
j = document.getElementById("slot9");
k = document.getElementById("slot10");
l = document.getElementById("slot11");
m = document.getElementById("slot12");*/
var mySound = document.getElementById('you-win');
// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/corner.PNG";
		
	} else if (el.src.match("images/corner.PNG")){
		
		el.src = "images/orange_slot.PNG";
		
	} else if (el.src.match("images/orange_slot.PNG"))  {
		
	el.src = "images/cherry_slot.PNG";
	
	} else {
		el.src = "images/cherry_slot.PNG";
	}
}

function nextImage2(el) {
	if (el.src.match("images/lemon_slot.PNG")){
		
		el.src = "images/bar_slot.PNG";
		
	} else if (el.src.match("images/bar_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
	el.src = "images/lemon_slot.PNG";
	
	} else {
		el.src = "images/lemon_slot.PNG";
	}
}

function nextImage3(el){
	if (el.src.match("images/orange_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/orange_slot.PNG";
	
	} else {
		el.src = "images/orange_slot.PNG";
	}
}
function nextImage4(el){
	if (el.src.match("images/coconut_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/coconut_slot.PNG";
	
	} else {
		el.src = "images/coconut_slot.PNG";
	}
}
function nextImage5(el){
	if (el.src.match("images/bar_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/bar_slot.PNG";
	
	} else {
		el.src = "images/bar_slot.PNG";
	}
}
function nextImage6(el){
	if (el.src.match("images/grape_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/grape_slot.PNG";
	
	} else {
		el.src = "images/grape_slot.PNG";
	}
}
function nextImage7(el){
	if (el.src.match("images/kiwi_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/kiwi_slot.PNG";
	
	} else {
		el.src = "images/kiwi_slot.PNG";
	}
}
function nextImage8(el){
	if (el.src.match("images/bell_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/bell_slot.PNG";
	
	} else {
		el.src = "images/bell_slot.PNG";
	}
}
function nextImage9(el){
	if (el.src.match("images/banana_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/banana_slot.PNG";
	
	} else {
		el.src = "images/banana_slot.PNG";
	}
}
function nextImage10(el){
	if (el.src.match("images/watermelon_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/orange_slot.PNG";
	
	}
	else if (el.src.match("images/orange_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	} else {
		el.src = "images/watermelon_slot.PNG";
	}
}
function nextImage11(el){
	if (el.src.match("images/empty.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/seven_slot.PNG";
		
	} else if (el.src.match("images/seven_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/empty.PNG";
	
	} else {
		el.src = "images/empty.PNG";
	}
}
function nextImage12(el){
	if (el.src.match("images/seven_slot.PNG")){
		
		el.src = "images/cherry_slot.PNG";
		
	} else if (el.src.match("images/cherry_slot.PNG")){
		
		el.src = "images/grape_slot.PNG";
		
	} else if (el.src.match("images/grape_slot.PNG")){
		
	el.src = "images/watermelon_slot.PNG";
	
	}
	else if (el.src.match("images/watermelon_slot.PNG")){
		
	el.src = "images/seven_slot.PNG";
	
	} else {
		el.src = "images/seven_slot.PNG";
	}
}
function playSound() {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById('you-win').play();
}

function checkSlot(el){
	if (a.src.match("cherry_slot") && b.src.match("cherry_slot") && c.src.match("cherry_slot")){
		mySound.play();
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		console.log("YOU WIN");

	} else{
	}
}

