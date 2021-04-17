(function () {
   // Document element declaire 
   let pictures = ['0', '1', '2', '3', '4'];
   let counter = 0;
   let btn = document.querySelectorAll(".slide");
   let slider = document.querySelector("#slider");


   // slider function create 
   btn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {

         if (btn.classList.contains("left-btn")) {
            counter--;
            if (counter < 0) {
               counter = pictures.length - 1
            }
            slider.style.backgroundImage = `url(img/${pictures[counter]}.jpeg)`;
         }
         if (btn.classList.contains("right-btn")) {
            counter++;
            if (counter > pictures.length - 1) {
               counter = 0;
            }
            slider.style.backgroundImage = `url(img/${pictures[counter]}.jpeg)`
         }
      })
   })

})();