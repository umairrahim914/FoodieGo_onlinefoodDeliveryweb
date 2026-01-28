import React from 'react';

const HeroSection = () => {
  return (
    <main>
      <section>
        <div className="hero-section flex wrapper gap-4 items-center min-h-[calc(100vh-14vh)]">
          <div className="content flex-1 min-w-[300px]">
            <h1 className="hero-title mb-6">
              Enjoy your delicious <span>Food</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-[550px]">
              We will fill your tummy with delicious<br />
              food and fast delivery.
            </p>
            <div className="flex gap-2 items-center mt-2">
              <a href="/menu" className="btn-custom no-underline">Order now</a>
              <a href="/login" className="btn-custom no-underline">Logout {onClick =>{Logout()}}  </a>
            </div>
          </div>
          <div className="image-container flex-1 min-w-[300px]">
            <img src="/images/delivery-boy.png" alt="Delivery Boy" className="max-w-full h-auto block mx-auto" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;