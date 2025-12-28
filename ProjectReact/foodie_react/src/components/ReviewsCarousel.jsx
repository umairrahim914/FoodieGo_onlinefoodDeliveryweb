import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ReviewsCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: "Guy hawkins",
      image: "/images/profile1.jpeg",
      rating: 4,
      review: "Foodie is the best. Besides the many delicious meals the service is also very good, especially very fast delivery. I highly recommend Foodie to you"
    },
    {
      id: 2,
      name: "Sophia Anderson",
      image: "/images/profile2.jpeg",
      rating: 4,
      review: "Fresh Ingredients, creative menu, and warm service make this spot a hidden gem. Perfect for casual dinners or special nights out. Truly a foodie's paradise!"
    },
    {
      id: 3,
      name: "Olvia Smith",
      image: "/images/profile3.jpeg",
      rating: 4,
      review: "Delicious dishes, cozy ambulance, and exceptional service. A must-visit for food lovers seeking bold flavours and unforgettable dining experience. Highly recommend, every bite delights!"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <i key={index} className="fa-solid fa-star fa-star"></i>
    ));
  };

  return (
    <section>
      <div className="wrapper p-top flex gap-3 items-center">
        <div className="image-container flex-1">
          <img 
            src="/images/delivery-boy-with-phone.png" 
            alt="Delivery Boy"
            className="max-w-full h-auto block mx-auto"
          />
        </div>

        <div className="review-container flex-1 max-w-[650px]">
          <h5 className="section-title text-left">Our Reviews</h5>
          <h2 className="section-heading text-left">What they say?</h2>
          
          {/* Swiper */}
          <div className="swiper mySwiper w-full h-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '#next',
                prevEl: '#prev',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="mt-4"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="flex gap-2 mb-4">
                    <div className="profile w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[var(--lead)]">{review.name}</h4>
                      <div className="mt-2">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-[550px] para">
                    {review.review}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-between mt-6">
              <a href="#" className="arrow w-10 h-10 rounded-full bg-[var(--gold-finger)] text-[var(--lead)] text-center leading-10 no-underline" id="prev">
                <i className="fa-solid fa-arrow-left"></i>
              </a>

              <a href="#" className="arrow w-10 h-10 rounded-full bg-[var(--gold-finger)] text-[var(--lead)] text-center leading-10 no-underline" id="next">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;