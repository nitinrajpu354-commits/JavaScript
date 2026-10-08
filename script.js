function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

let search_bar = document.querySelector("#search");

search_bar.addEventListener(
  "input",
  debounce(function () {
    console.log("chala");
  }, 500),
);
