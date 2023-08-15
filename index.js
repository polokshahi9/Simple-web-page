
let submitButton = document.getElementById("btn");
submitButton.addEventListener('click', function(){

    let showPage = document.getElementById("principalDiv");
    showPage.style.display= "block";

    let hidePage = document.getElementById("main");
    hidePage.style.display = "none";
})