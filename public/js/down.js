const getData = (id) => {
  const url = `https://flixnation.herokuapp.com/download?id=${id}`;
  window.open(url, "_self");
};
