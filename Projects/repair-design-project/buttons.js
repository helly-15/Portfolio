let desktopButton = document.getElementById("desktop-mobile");
let backbutton = document.getElementById("back");
let bodywrapper = document.getElementById("bodywrapper");
let iframe = document.getElementById("diviframe");

//window.onload=
desktopButton.addEventListener("click", ()=>{
    
    if (desktopButton.innerText=="Mobile"){
        iframe.style.display = "block";
        bodywrapper.style.display="none";
        desktopButton.innerText= "Desktop";
    }
else {
    iframe.style.display = "none";
        bodywrapper.style.display="block";
        desktopButton.innerText= "Mobile";
}

});
backbutton.addEventListener("click", ()=>{
    location.href = "../../index.html"
});
