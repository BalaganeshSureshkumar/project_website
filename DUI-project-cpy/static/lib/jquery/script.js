let openshopping = document.querySelector(".shopping");
let closeshopping = document.querySelector(".closeshopping");
let list = document.querySelector(".list");
let listcard = document.querySelector(".listcard");
let content = document.querySelector(".content");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openshopping.addEventListener("click", ()=>{

content.classList.add("active");

})

closeshopping.addEventListener("click", ()=>{

  content.classList.remove("active");
  
  })

  document.addEventListener("DOMContentLoaded", function() {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function(menuItem) {
      
        let plusButton = menuItem.querySelector(".add-to-cart");

        plusButton.addEventListener("click", function(event) {
            event.stopPropagation(); 
            let name = menuItem.querySelector("h3").textContent;
            let price = menuItem.querySelector("span").textContent;

            let listItem = document.createElement("li");
            listItem.textContent = `${name} - ${price}`;

     
            listcard.appendChild(listItem);

            let currentTotal = parseFloat(total.textContent.replace("$", ""));
            let itemPrice = parseFloat(price.replace("$", ""));
            total.textContent = `$${(currentTotal + itemPrice).toFixed(2)}`;

            quantity.textContent = parseInt(quantity.textContent) + 1;
        });
    });
});