if (document.querySelector(".modal-map")) {
  var map_link = document.querySelector(".map");
  var map_popup = document.querySelector(".modal-map");
  var map_close = map_popup.querySelector(".modal-close");

  map_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    map_popup.classList.add("modal-show");
  });

  map_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    map_popup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (map_popup.classList.contains("modal-show")) {
        map_popup.classList.remove("modal-show");
      };
    };
  });
}

if (document.querySelector(".modal-write-us")) {
  var write_us_link = document.querySelector(".write-us-button");
  var write_us_popup = document.querySelector(".modal-write-us");
  var write_us_close = write_us_popup.querySelector(".modal-close");
  var write_us_form = write_us_popup.querySelector(".write-us-form");
  var user_name = write_us_popup.querySelector("[name=name]");
  var user_email = write_us_popup.querySelector("[name=email]");
  var user_text = write_us_popup.querySelector("[name=text]");

  write_us_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    write_us_popup.classList.add("modal-show");
    user_name.focus();
  });

  write_us_form.addEventListener("submit", function(evt) {
    if (!user_name.value || !user_email.value || !user_text.value) {
      evt.preventDefault();
      write_us_popup.classList.remove("modal-error");
      write_us_popup.offsetWidth = write_us_popup.offsetWidth;
      write_us_popup.classList.add("modal-error");
    };
  });

  write_us_close.addEventListener("click", function(evt) {
    evt.preventDefault();
    write_us_popup.classList.remove("modal-show");
    write_us_popup.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (write_us_popup.classList.contains("modal-show")) {
        write_us_popup.classList.remove("modal-show");
        write_us_popup.classList.remove("modal-error");
      };
    };
  });
}

if (document.querySelector(".modal-item-in-basket")) {
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
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (item_basket_popup.classList.contains("modal-show")) {
        item_basket_popup.classList.remove("modal-show");
      };
    };
  });
}
