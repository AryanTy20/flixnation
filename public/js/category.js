const total = parseInt(document.querySelector("#total").innerHTML);
const currentActive = document.querySelector(".current");
let title = document.querySelector(".title").textContent.toLowerCase();

switch (title) {
  case "bollywood":
    title = "bollywood";
    break;
  case "korean movie":
    title = "korean-movie";
    break;
  case "k-drama":
    title = "k-drama";
    break;
  case "tv-series":
    title = "tv-series";
    break;
  default:
    title = "hollywood";
}

let current = parseInt(currentActive.innerHTML);
const totalPage = Math.ceil(total / 20);
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const first = document
  .querySelector(".first")
  .setAttribute("href", `/${title}/1`);
const last = document
  .querySelector(".last")
  .setAttribute("href", `/${title}/${totalPage}`);
const next = document
  .querySelector(".next")
  .setAttribute("href", `/${title}/${current + 1}`);
const prev = document
  .querySelector(".prev")
  .setAttribute("href", `/${title}/${current - 1}`);
let rp = current;
let lp = current;

if (current == 1) {
  right.innerHTML = `<a href='/${title}/${rp + 1}' class="btn border" >${
    rp + 1
  }</a><a href='/${title}/${rp + 2}' class="btn btn border" >${rp + 2}</a>`;
  document.querySelector(".first").classList.add("disable");
  document.querySelector(".prev").classList.add("disable");
}

if (current == totalPage) {
  document.querySelector(".next").classList.add("disable");
  document.querySelector(".last").classList.add("disable");
}

if (current > 2) {
  if (current != totalPage) {
    right.innerHTML = `<a href='/${title}/${rp + 1}' class="btn border" >${
      rp + 1
    }</a><a  href='/${title}/${rp + 2}' class="btn btn border" >${rp + 2}</a>`;
  }
  if (current != 1) {
    left.innerHTML = `<a href='/${title}/${lp - 2}' class="btn border" >${
      lp - 2
    }</a><a  href='/${title}/${lp - 1}' class="btn btn border"> ${lp - 1}</a>`;
  }
}
if (current == 2) {
  right.innerHTML = `<a href='/${title}/${rp + 1}' class="btn border" >${
    rp + 1
  }</a><a href='/${title}/${rp + 2}' class="btn btn border" >${rp + 2}</a>`;
  left.innerHTML = `<a href='/${title}/${lp - 1}' class="btn btn border" >${
    lp - 1
  }</a>`;
}

const getData = (id) => {
  const url = `https://flixnation.herokuapp.com/download?id=${id}`;
  window.open(url, "_self");
};
