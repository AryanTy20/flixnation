const getData = (id) => {
  const url = `http://localhost:5000/download?id=${id}`;
  window.open(url, "_self");
};
