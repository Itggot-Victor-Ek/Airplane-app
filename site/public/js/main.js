function hamburgar_meny() {

    element = document.querySelector(".hamburger");
    console.log(element);
    element.classList.toggle("hamburgare_js");
    element = document.querySelector(".moreH1");
    element.classList.toggle("moreH1_js");
}

function heart(element) {
  element.classList.toggle("selected");
}

function settingsbutton(element) {
  element.classList.toggle("s_selected");
}
