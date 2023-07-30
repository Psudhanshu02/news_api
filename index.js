

let accordian = document.getElementById("accordion");
const req = new XMLHttpRequest();
req.open("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=5269d28cfe7c4ca58d374dc260313cb4", true);

req.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let article = json.articles
    console.log(article);
    let site = ""
    article.forEach(function (element) {
      let news = `<div class="col-sm-3">
          <div class="card" style="margine :100px;background-color:grey">
          <img class="card-img-top img-fluid" src="${element["urlToImage"]}" alt="Card image cap">
          <div class="card-block">
              <h4 class="card-title" >${element["title"]}</h4>
              <p class="card-text">${element["description"]}</p>
              <a href=${element["url"]} class="btn btn-primary target="_blank" >read more</a>
              
          </div>
        </div>
        </div>`

      site += news


    });
    accordian.innerHTML = site
  }
  else {
    console.log("error");
  }
}
req.send();


