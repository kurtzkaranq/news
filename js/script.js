const newsList = document.getElementById("news");
const btn = document.querySelector("button");
const newsData = "/js/data.json";

function createNews(arr, container) {
  let html = document.querySelector(container);
  arr.map((item) => {
    let section = `
        <img src=${item.img}>
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        <p>${item.date}</p>`;
    html.innerHTML += section;

    // console.log(item);
  });
}
function getJSON() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", newsData);
  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    //   createNews(data, "news");
    createNews(getJSON(), newsList);
    console.log(data);
  };
  xhr.send();
}
