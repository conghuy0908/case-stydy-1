var menubtn = document.getElementById("menubtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right ="-250px";
menubtn.onclick = function(){
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0" ;
        menu.src = "menu.png";
        
    } else {
        sideNav.style.right = "-250px";
        menu.src - "menu.png";
        
    }
}