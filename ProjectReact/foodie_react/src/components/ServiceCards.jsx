import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "Easy to Order",
      description: "you only need a few steps in ordering food.",
      image: "/images/easy-to-order.png"
    },
    {
      id: 2,
      title: "Fast delivery",
      description: "delivery that is always ontime even faster.",
      image: "/images/fast-delivery.png"
    },
    {
      id: 3,
      title: "Best Quality",
      description: "Not only fast for us in quality is also number one.",
      image: "/images/best-quality.png"
    }
  ];

  return (
    <section>
      <div className="wrapper p-top">
        <div className="text-center">
          <h5 className="section-title">Our Service</h5>
          <h2 className="section-heading">How does it Work?</h2>
        </div>
        <div className="flex text-center mt-4 gap-4 flex-wrap justify-center">
          {services.map((service) => (
            <div key={service.id} className="service-card flex-1 min-w-[300px]">
              <div className="image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-w-full h-auto block mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lead)] mt-6 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;