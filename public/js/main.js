const submitForm = () => {
  const title = document.querySelector(".search-input").value;
  if (title.length == 0) return;
  const str2 = title.charAt(0).toUpperCase() + title.slice(1);
  const url = `http://localhost:5000/search?title=${str2}`;
  window.open(url, "_self");
};
const submitbtn = document.querySelector(".search-submit");
submitbtn.addEventListener("click", submitForm);
