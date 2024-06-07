
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
        closeNav();
    }
});
