let btn = document.querySelector(".hamburger");
let icon = btn.querySelector(".sidebar");

btn.onclick = function (){
    if(icon.classList.contains("sidebar")){
        icon.classList.replace(".sidebar", "sidebarGo")
    }
    else{
        icon.classList.replace(".sidebarGo","sidebar")
    }
}