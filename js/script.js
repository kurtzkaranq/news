const newsList = document.getElementById("news");
const btn = document.querySelector("button");
const newsData = "/js/data.json";
const btn1 = document.querySelector("#upArrow");
const btn2 = document.querySelector("#downArrow");
const btn3 = document.querySelector("#all");
const btn4 = document.querySelector("#gov");
const btn5 = document.querySelector("#sport");
const btn6 = document.querySelector("#soc");
const ahah = document.querySelector(".ahah");
function createNews(arr, container) {
  let html = document.querySelector(container);
  arr.map((item) => {
    let section = `
    <div class = ''>

    <div class="card mb-2 nnews" style="width: 25rem;">
    <img class="card-img-top" src="${item.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.body}</p>
      
    </div>
  </div>
        </div>`;
    let inf = (html.innerHTML += section);

    // console.log(item);
  });
}

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
    const data1 = data.filter((d1) => {
      return d1.type == "gov";
    });

    const data2 = data.filter((d1) => {
      return d1.type == "sport";
    });

    const data3 = data.filter((d1) => {
      return d1.type == "social";
    });

    // createNews(data, ".news");

    btn1.addEventListener("click", () => {
      ahah.innerHTML = "";
      createNews(data, ".news");
    });
    btn2.addEventListener("click", () => {
      ahah.innerHTML = "";
      createNews(data, ".news");
    });
    btn3.addEventListener("click", () => {
      ahah.innerHTML = "";
      createNews(data, ".news");
    });
    btn4.addEventListener("click", () => {
      ahah.innerHTML = "";
      createNews(data1, ".news");
    });
    btn5.addEventListener("click", () => {
      ahah.innerHTML = "";
      createNews(data2, ".news");
    });
    btn6.addEventListener("click", () => {
      ahah.innerHTML = "";
      createNews(data3, ".news");
    });
  }
};
xhr.open("GET", "js/data.json", true);
xhr.send();

// console.log(data);
getJSON();
