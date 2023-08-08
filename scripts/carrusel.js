const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

const inputCheck1 = document.querySelector("#input-1");
const inputCheck2 = document.querySelector("#input-2");
const inputCheck3 = document.querySelector("#input-3");
// const inputCheck4 = document.querySelector("#input-4");

const expInfo1 = document.querySelector("#exp-info-1");
const expInfo2 = document.querySelector("#exp-info-2");
const expInfo3 = document.querySelector("#exp-info-3");

const timeLine = document.querySelector("#timeline");
const timeLineLine = document.querySelector(".timeline-line");

const colorDotChecked = getComputedStyle(document.body).getPropertyValue(
  "--warm-blue"
);
const colorDotUnchecked = getComputedStyle(document.body).getPropertyValue(
  "--grey"
);

arrowLeft.addEventListener("click", previousInfo);
arrowRight.addEventListener("click", nextInfo);

inputCheck1.addEventListener("click", colouredDots);
inputCheck2.addEventListener("click", colouredDots);
inputCheck3.addEventListener("click", colouredDots);
// inputCheck4.addEventListener("click", colouredDots);

if (inputCheck1.checked) {
  arrowLeft.style.opacity = "0.5";
  arrowRight.style.opacity = "1";

  timeLine.children[1].style.backgroundColor = colorDotUnchecked;
  timeLine.children[2].style.backgroundColor = colorDotUnchecked;
  timeLine.children[3].style.backgroundColor = colorDotUnchecked;
}

function colouredDots() {
  if (inputCheck1.checked) {
    timeLine.children[1].style.backgroundColor = colorDotUnchecked;
    timeLine.children[2].style.backgroundColor = colorDotUnchecked;
    timeLine.children[3].style.backgroundColor = colorDotUnchecked;

    arrowLeft.style.opacity = "0.5";
    arrowRight.style.opacity = "1";

    expInfo1.classList.toggle("inactive");
    expInfo2.classList.add("inactive");
    expInfo3.classList.add("inactive");
    1;
  } else if (inputCheck2.checked) {
    timeLine.children[1].style.backgroundColor = colorDotChecked;
    timeLine.children[2].style.backgroundColor = colorDotUnchecked;
    timeLine.children[3].style.backgroundColor = colorDotUnchecked;

    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "1";

    expInfo1.classList.add("inactive");
    expInfo2.classList.toggle("inactive");
    expInfo3.classList.add("inactive");
    1;
  } else {
    timeLine.children[1].style.backgroundColor = colorDotChecked;
    timeLine.children[2].style.backgroundColor = colorDotChecked;
    timeLine.children[3].style.backgroundColor = colorDotUnchecked;
    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "0.5";

    expInfo1.classList.add("inactive");
    expInfo2.classList.add("inactive");
    expInfo3.classList.toggle("inactive");
  }
}
function previousInfo() {
  if (inputCheck1.checked) {
    inputCheck1.checked = true;
    inputCheck2.checked = false;
    inputCheck3.checked = false;
    // inputCheck4.checked = false;

    arrowRight.style.opacity = "1";
    arrowLeft.style.opacity = "0.5";
  } else if (inputCheck2.checked) {
    timeLine.children[1].style.backgroundColor = colorDotUnchecked;
    inputCheck1.checked = true;
    inputCheck2.checked = false;
    inputCheck3.checked = false;
    // inputCheck4.checked = false;

    arrowRight.style.opacity = "1";
    arrowLeft.style.opacity = "0.5";

    expInfo2.classList.add("inactive");
    expInfo1.classList.toggle("inactive");
  } else if (inputCheck3.checked) {
    timeLine.children[2].style.backgroundColor = colorDotUnchecked;
    inputCheck1.checked = false;
    inputCheck2.checked = true;
    inputCheck3.checked = false;
    // inputCheck4.checked = false;

    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "1";

    expInfo3.classList.add("inactive");
    expInfo2.classList.toggle("inactive");
  } else {
    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "1";
    timeLine.children[3].style.backgroundColor = colorDotUnchecked;

    inputCheck1.checked = false;
    inputCheck2.checked = false;
    inputCheck3.checked = true;
    // inputCheck4.checked = false;

    expInfo4.classList.add("inactive");
    expInfo3.classList.toggle("inactive");
  }
}

function nextInfo() {
  if (inputCheck1.checked) {
    timeLine.children[1].style.backgroundColor = colorDotChecked;
    inputCheck1.checked = false;
    inputCheck2.checked = true;
    inputCheck3.checked = false;
    // inputCheck4.checked = false;

    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "1";

    expInfo1.classList.add("inactive");
    expInfo2.classList.toggle("inactive");
  } else if (inputCheck2.checked) {
    timeLine.children[2].style.backgroundColor = colorDotChecked;
    inputCheck1.checked = false;
    inputCheck2.checked = false;
    inputCheck3.checked = true;
    // inputCheck4.checked = false;

    arrowLeft.style.opacity = "1";
    arrowRight.style.opacity = "0.5";

    expInfo2.classList.add("inactive");
    expInfo3.classList.toggle("inactive");
  } else {
    arrowLeft.style.opacity = "1";
  }
}
