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