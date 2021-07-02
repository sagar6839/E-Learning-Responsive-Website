var sideNav = document.getElementById("sideNav");
var menuBtn = document.getElementById("menuBtn");

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
    } else {
        sideNav.style.right = "-250px";
    }
}

var scroll = new SmoothScroll('a[href*="#"]');