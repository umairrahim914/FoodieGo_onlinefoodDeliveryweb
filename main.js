var swiper = new Swiper(".mySwiper",{
      loop: true,
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });


    const cartIcon = document.querySelector(".cart-icon");
    const cartTab = document.querySelector(".cart-tab");
    const closeBtn = document.querySelector(".close-btn"); 
    const cardList = document.querySelector(".card-list");

    cartIcon.addEventListener("click",()=> cartTab.classList.add("cart-tab-active"));

    closeBtn.addEventListener("click",()=> cartTab.classList.remove("cart-tab-active"));

    let productList = [];
    const initApp = () =>{

      fetch("products.json").then
      (response => response.json()).then
      (data =>{

        productList = data;
        console.log(productList);
      })

    }

    initApp();

    const showCards = () =>{
      productList.forEach(product=>{
        const orderCard = document.createElement("div");
        orderCard.classList.add("order-card");

        orderCard.innetHTML = ` 
        <div class="card-image">
            <img src="images/burger.png">
        </div>
        <h4>Double Beef Burger</h4>
        <h4 class="price">$200</h4>
        <a href="#"class="btn">Add to Cart</a>
        `;

          cardList.appendChild(orderCard);
      })


    }
