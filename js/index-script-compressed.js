var map_link=document.querySelector(".map"),map_popup=document.querySelector(".modal-map"),map_close=map_popup.querySelector(".modal-close"),write_us_link=document.querySelector(".write-us-button"),write_us_popup=document.querySelector(".modal-write-us"),write_us_close=write_us_popup.querySelector(".modal-close"),user_name=write_us_popup.querySelector("[name=name]");map_link.addEventListener("click",function(a){a.preventDefault(),map_popup.classList.add("modal-show")}),map_close.addEventListener("click",function(a){a.preventDefault(),map_popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(a){a.preventDefault(),27===a.keyCode&&map_popup.classList.contains("modal-show")&&map_popup.classList.remove("modal-show")}),write_us_link.addEventListener("click",function(a){a.preventDefault(),write_us_popup.classList.add("modal-show"),user_name.focus()}),write_us_close.addEventListener("click",function(a){a.preventDefault(),write_us_popup.classList.remove("modal-show")}),window.addEventListener("keydown",function(a){a.preventDefault(),27===a.keyCode&&write_us_popup.classList.contains("modal-show")&&write_us_popup.classList.remove("modal-show")});
