var buy_link = document.querySelectorAll(".buy-button");
var item_basket_popup = document.querySelector(".modal-item-in-basket");
var item_basket_close = item_basket_popup.querySelector(".modal-close");

for (var i = 0; i < buy_link.length; i++) {
  buy_link[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    item_basket_popup.classList.add("modal-show");
  });
};

item_basket_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  item_basket_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (item_basket_popup.classList.contains("modal-show")) {
      item_basket_popup.classList.remove("modal-show");
    }
  }
});
