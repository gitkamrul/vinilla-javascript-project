    // filter all element 
    (function(){   
      let btn = document.querySelectorAll(".filter-btn");
      let showImtems = document.querySelectorAll(".store-item");
      btn.forEach(btn => {
        btn.addEventListener("click",(e)=>{
          e.preventDefault();
          const filter = e.target.dataset.filter;
          showImtems.forEach((item)=>{
            if (filter=="all") {
              item.style.display = "block";
            }else{
              if (item.classList.contains(filter)) {
                item.style.display = "block";
              }else{
                item.style.display = "none";
              }
            }
          })
        });
        
      });
    })();
  
  
    // search element function start 
  
    (function(){
      let searchobx = document.getElementById("search-box");
      let items = document.querySelectorAll(".store-item");
  
      searchobx.addEventListener("keyup",(e)=>{
  
        let searchFilter = e.target.value.toLowerCase().trim();
        items.forEach((item)=>{
          if (item.textContent.includes(searchFilter)) {
            item.style.display= "block";
            
          }else{
            item.style.display= "none";
          }
        })
  
  
      });
    })()
  

  // Modal function create 


   function modal(){
    let storeItems = document.querySelectorAll("#store-img");
    let lightboxContainer = document.querySelector(".image-modal");
    let modalItem =  document.getElementById("modal-item");
    let images = document.querySelectorAll("#store-img");
    let close = document.getElementById("close");

    let imageList = [];
    let  imagercounter = 0;
    images.forEach((image)=>{
      imageList.push(image.src);
    })


    storeItems.forEach((item)=>{

      item.addEventListener("click",function(e){
        let image  = e.target.src;
        modalItem.style.backgroundImage = `url(${image})`;
        imagercounter = imageList.indexOf(image);
        lightboxContainer.classList.add("show");
      });

      // close-modal-function-create 
      close.addEventListener("click",function(){
        lightboxContainer.classList.remove("show");
      });  

    });


    // Arrow function create 

    (function(){
      let left = document.getElementById("left");
      let right = document.getElementById("right");

      left.addEventListener("click",function(){
        imagercounter --;
        if(imagercounter <0){
          imagercounter = imageList.length-1;
        }
        modalItem.style.backgroundImage = `url(${imageList[imagercounter]})`;
      });
      right.addEventListener("click",function(){
        imagercounter ++;
        if(imagercounter >= imageList.length){
          imagercounter = 0;
        }
        modalItem.style.backgroundImage = `url(${imageList[imagercounter]})`;
      })

    })()


  

    






















   }
   modal();





  