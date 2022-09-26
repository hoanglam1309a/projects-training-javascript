const input = document.querySelector(".search-input");
const btnSearch = document.querySelector(".search-btn");
const listSearch = document.querySelector(".search-list");
let arrIdeas = [];

input.addEventListener("keyup", function (e) {
  getIdeas(e.target.value);
});

function getIdeas(search) {
  arrIdeas = suggestions.filter((suggestion) => {
    return suggestion.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
  });
  if (search == arrIdeas[0] || search == "") {
    listSearch.innerHTML = "";
    return;
  }
  arrIdeas = arrIdeas.map((data) => {
    return (data = `<li class="search-item" onClick={select(this)}>${data}</li>`);
  });
  let listRender = arrIdeas.join("");
  listSearch.innerHTML = listRender;
}

function select(item) {
  input.value = item.innerText;
  getIdeas(item.innerText);
}
