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
    const cartList = document.querySelector(".cart-list");
    const cartTotal = document.querySelector(".cart-total");
    const cartValue = document.querySelector(".cart-value");
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const bars = document.querySelector(".fa-bars");

    cartIcon.addEventListener("click",()=> cartTab.classList.add("cart-tab-active"));
    closeBtn.addEventListener("click",()=> cartTab.classList.remove("cart-tab-active"));

    hamburger.addEventListener("click",()=> mobileMenu.classList.toggle("mobile-menu-active"));
    hamburger.addEventListener("click",()=> bars.classList.toggle("fa-xmark"));

    let productList = [];
    let cartProduct = [];

    const updateTotals = () =>{

        let totalPrice = 0;
        let totalQuantity = 0;

        document.querySelectorAll(".item").forEach(item =>{

          const quantity = parseInt(item.querySelector(".quantity-value").textContent);
          const price = parseFloat(item.querySelector(".item-total").textContent.replace("$",""));

          totalPrice += price;
          totalQuantity += quantity;
        });

        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        cartValue.textContent = totalQuantity;
    }

    
    const showCards = () =>{
      productList.forEach(product=>{
        const orderCard = document.createElement("div");
        orderCard.classList.add("order-card");

        orderCard.innerHTML = ` 
        <div class="card-image">
            <img src="${product.image}">
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a href="#"class="btn card-btn">Add to Cart</a>
        `;

          cardList.appendChild(orderCard);

          const cardBtn = orderCard.querySelector(".card-btn")
          cardBtn.addEventListener("click",(e)=>{
            e.preventDefault(); //stops the page for loading (page will not refresh)

            addToCart(product);
            

          })
      });
    };

    const addToCart = (product) =>{

      const existingProduct = cartProduct.find(item => item.id === product.id);
      if(existingProduct){
        alert("Item already in your cart!")
        return;
      }

      cartProduct.push(product);

      let quantity = 1;
      let price = parseFloat(product.price.replace("$",""))


      const cartItem = document.createElement("div");
      cartItem.classList.add("item");

      cartItem.innerHTML = `
        <div class="item-image">
              <img src="${product.image}">
            </div>
            <div class="detail">
              <h4>${product.name}</h4>
              <h4 class="item-total">${product.price}</h4>
            </div>
            <div class="flex">
              <a href="#"class="quantity-btn minus">
                <i class="fa-solid fa-minus"></i>
              </a>
              <h4 class="quantity-value">${quantity}</h4>
              <a href="#"class="quantity-btn plus">
                <i class="fa-solid fa-plus"></i>
              </a>
            </div>
      
      `;

      cartList.appendChild(cartItem);
      updateTotals();

      const plusBtn = cartItem.querySelector(".plus");
      const quantityValue = cartItem.querySelector(".quantity-value");
      const itemTotal = cartItem.querySelector(".item-total");
      const minusBtn = cartItem.querySelector(".minus");

      plusBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        quantity++;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(price * quantity).toFixed(2)}`
        updateTotals();

      });

      minusBtn.addEventListener("click",(e)=>{
        e.preventDefault();

        if(quantity > 1){
          quantity--;
          quantityValue.textContent = quantity;
          itemTotal.textContent = `$${(price * quantity).toFixed(2)}`
          updateTotals();
        }

        else{
          cartItem.classList.add("slide-out");
          
          setTimeout(()=>{
            cartItem.remove();
            cartProduct = cartProduct.filter(item =>item.id !== product.id);
            updateTotals();

          },300)
        }
       
        
      });

    };
    const initApp = () =>{

      fetch("products.json").then
      (response => response.json()).then
      (data =>{

        productList = data;
        showCards();
      })

    }

    initApp();
    // Explore Menu Data
const menuCategories = [
  {
    name: "Promotion",
    image: "images/fff.png" // replace with your image path
  },
  {
    name: "Everyday Value",
    image: "images/bg.jpg"
  },
  {
    name: "Ala-Carte & Combos",
    image: "images/99.png"
  },
  {
    name: "Signature Boxes",
    image: "images/00.png"
  },
  {
    name: "Sharing",
    image: "images/bugz.png"
  }
];

// Function to display menu categories
const showMenuCategories = () => {
  const menuContainer = document.querySelector(".menu-categories");
  menuCategories.forEach(category => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-category");
    menuItem.innerHTML = `
      <img src="${category.image}" alt="${category.name}">
      <div class="red-line"></div>
      <h4>${category.name}</h4>
    `;
    menuContainer.appendChild(menuItem);
  });
};

// Call the function to display menu categories
showMenuCategories();
// Add event listeners to "Add to Cart" buttons in Best Sellers section
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.parentElement.querySelector('h3').textContent} added to cart!`);
    });
});
// Smooth scroll to Explore Menu section when clicking navbar links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80, // adjust if your navbar is fixed
        behavior: 'smooth'
      });
    }
  });
});
