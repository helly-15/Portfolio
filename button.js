let leftbutton = document.getElementById("button-1");
let rightbutton = document.getElementById("button-2");
let wrapper=document.getElementById("wrapper");
leftbutton.addEventListener("click", ()=>{
    
    if (wrapper.classList.contains("first-position")){
        wrapper.classList.remove("first-position");
        wrapper.classList.add("second-position")
    }
    else if (wrapper.classList.contains("second-position")){
        wrapper.classList.remove("second-position");
        wrapper.classList.add("first-position")
    }
});
rightbutton.addEventListener("click", ()=>{
   
    if (wrapper.classList.contains("first-position")){
        wrapper.classList.remove("first-position");
        wrapper.classList.add("second-position")
    }
    else if (wrapper.classList.contains("second-position")){
        wrapper.classList.remove("second-position");
        wrapper.classList.add("first-position")
    }
    
})

wrapper.addEventListener("touchmove", ()=>{
   
    if (wrapper.classList.contains("first-position")){
        wrapper.classList.remove("first-position");
        wrapper.classList.add("second-position")
    }
    else if (wrapper.classList.contains("second-position")){
        wrapper.classList.remove("second-position");
        wrapper.classList.add("first-position")
    }
    
});
var butContent = document.getElementsByClassName("content-collapsible");


for (let i = 0; i < butContent.length; i++) {
  butContent[i].addEventListener("click", function() {
    this.classList.toggle("button_active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (this.classList.contains ("button_active")){
        this.innerText= "Hide desc";
    }
    else this.innerText = "Show desc";
  });
}


const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
                    
                    if (wrapper.classList.contains("first-position")){
                        wrapper.classList.remove("first-position");
                        wrapper.classList.add("second-position")
                    }
                    else if (wrapper.classList.contains("second-position")){
                        wrapper.classList.remove("second-position");
                        wrapper.classList.add("first-position")
                    }





				} else {
                    
                    if (wrapper.classList.contains("first-position")){
                        wrapper.classList.remove("first-position");
                        wrapper.classList.add("second-position")
                    }
                    else if (wrapper.classList.contains("second-position")){
                        wrapper.classList.remove("second-position");
                        wrapper.classList.add("first-position")
                    }




				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {

                                if (wrapper.classList.contains("first-position")){
                                    wrapper.classList.remove("first-position");
                                    wrapper.classList.add("second-position")
                                }
                                else if (wrapper.classList.contains("second-position")){
                                    wrapper.classList.remove("second-position");
                                    wrapper.classList.add("first-position")
                                }

							} else {

							
                    
                                if (wrapper.classList.contains("first-position")){
                                    wrapper.classList.remove("first-position");
                                    wrapper.classList.add("second-position")
                                }
                                else if (wrapper.classList.contains("second-position")){
                                    wrapper.classList.remove("second-position");
                                    wrapper.classList.add("first-position")
                                }
                                
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.carousel');
swipedetect(el);