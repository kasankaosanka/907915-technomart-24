for(var buy_link=document.querySelectorAll(".buy-button"),item_basket_popup=document.querySelector(".modal-item-in-basket"),item_basket_close=item_basket_popup.querySelector(".modal-close"),i=0;i<buy_link.length;i++)buy_link[i].addEventListener("click",function(a){a.preventDefault(),item_basket_popup.classList.add("modal-show")});item_basket_close.addEventListener("click",function(a){a.preventDefault(),item_basket_popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(a){a.preventDefault(),27===a.keyCode&&item_basket_popup.classList.contains("modal-show")&&item_basket_popup.classList.remove("modal-show")});
