var swiper = new Swiper(".mySwiper",{
      loop: true,
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });


    const cartIcon = document.querySelector(".cart-icon");
    const cartTab = document.querySelector(".cart-tab");

    cartIcon.addEventListener("click",()=> cartTab.classList.add("cart-tab-active"));
