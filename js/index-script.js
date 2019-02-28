var map_link = document.querySelector(".map");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-close");
var write_us_link = document.querySelector(".write-us-button");
var write_us_popup = document.querySelector(".modal-write-us");
var write_us_close = write_us_popup.querySelector(".modal-close");
var user_name = write_us_popup.querySelector("[name=name]");

map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});

map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("modal-show")) {
      map_popup.classList.remove("modal-show");
    }
  }
});

write_us_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  write_us_popup.classList.add("modal-show");
  user_name.focus();
});

write_us_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  write_us_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (write_us_popup.classList.contains("modal-show")) {
      write_us_popup.classList.remove("modal-show");
    }
  }
});
