"use strict";

const modal = document.querySelector(".modall");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//         closeModal();
//     }
// });
// ---------------------

const closeModal = function (elem) {
  elem.classList.add("hidden");
  elem.nextElementSibling.classList.add("hidden");
};

const openModal = function (elem) {
 elem.classList.remove("hidden");
  elem.nextElementSibling.classList.remove("hidden");
};


function popup(elem){
  openModal(elem);
  console.log(elem.childNodes[1]);
  function close_fun(){
    closeModal(elem);
  }
    elem.childNodes[1].addEventListener("click", close_fun);
  elem.nextElementSibling.addEventListener("click", close_fun);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal(elem);
    }
});
}

//SearchBar

const search = document.querySelector("input.search");

search.addEventListener("keyup", (e) => {
  const keyword = e.target.value.trim();
  const items = document.querySelectorAll("div.cards");
  items.forEach((item) => {
    if (item.querySelector(".heading").innerText.toLowerCase().includes(keyword)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});