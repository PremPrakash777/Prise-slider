const range = document.getElementById("range");
const prices = document.querySelectorAll(".price");

range.addEventListener("input", function() {
  
   const value = Number(this.value);
  
   prices.forEach(price => {
     
     const number = Number(price.classList[1].split("-")[1]);
     
     if (value >= (number -1) *30 +10 && value <= number *30 +10) {
       
       price.classList.add("active");
       
     } else {
       
       price.classList.remove("active");
       
     }
     
   });
  
});
