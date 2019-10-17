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

