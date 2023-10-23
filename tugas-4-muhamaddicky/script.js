// JavaScript code for managing the shopping list
document.addEventListener("DOMContentLoaded", function () {
    const itemForm = document.getElementById("item-form");
    const itemInput = document.getElementById("item-input");
    const itemList = document.getElementById("item-list");
    const filterInput = document.getElementById("filter");
    const clearButton = document.getElementById("clear");
  
    // Add an item to the list
    itemForm.addEventListener("submit", addItem);
  
    // Remove an item from the list
    itemList.addEventListener("click", removeItem);
  
    // Clear all items
    clearButton.addEventListener("click", clearItems);
  
    // Filter items
    filterInput.addEventListener("input", filterItems);
  
    function addItem(e) {
      e.preventDefault();
      const newItemText = itemInput.value.trim();
  
      if (newItemText !== "") {
        const newItem = document.createElement("li");
        newItem.appendChild(document.createTextNode(newItemText));
        newItem.innerHTML += `
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
  
        itemList.appendChild(newItem);
        itemInput.value = "";
      }
    }
  
    function removeItem(e) {
      if (e.target.classList.contains("remove-item")) {
        if (confirm("Are you sure you want to remove this item?")) {
          const item = e.target.parentElement;
          itemList.removeChild(item);
        }
      }
    }
  
    function clearItems() {
      if (confirm("Are you sure you want to clear all items?")) {
        while (itemList.firstChild) {
          itemList.removeChild(itemList.firstChild);
        }
      }
    }
  
    function filterItems() {
      const text = filterInput.value.toLowerCase();
      const items = itemList.getElementsByTagName("li");
      Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  });
  