const tabItems = document.querySelectorAll(".tabs__container-item");
const tabItemsInner = document.querySelectorAll(".tab-content__inner");

// Select tab content item
function selectItem(e) {
  // remove all show and border classes
  removeShow();
  removeBorder();

  // Add border to current tab item
  this.classList.add("border-bottom");

  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  //Add Show class
  tabContentItem.classList.add("show");
}

// Removes border
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("border-bottom");
  });
}

// Removes show class
function removeShow() {
  tabItemsInner.forEach((item) => {
    item.classList.remove("show");
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});
