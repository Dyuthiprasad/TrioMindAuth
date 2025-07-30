import React, { useState } from "react";

export default function CoreServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.",
      image: "/images/web-dev.svg",
    },
    {
      title: "Custom Software",
      description:
        "Tailored software solutions designed to meet your specific business requirements and streamline operations.",
      image: "/images/custom-software.svg",
    },
    {
      title: "SaaS Applications",
      description:
        "Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment.",
      image: "/images/saas.svg",
    },
    {
      title: "AI Applications",
      description:
        "Intelligent applications powered by machine learning and artificial intelligence to automate and optimize processes.",
      image: "/images/ai-apps.svg",
    },
    {
      title: "Managed IT Services",
      description:
        "Comprehensive IT infrastructure management, monitoring, and support services for seamless operations.",
      image: "/images/managed-it.svg",
    },
    {
      title: "IT Consultancy",
      description:
        "Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation.",
      image: "/images/consultancy.svg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {/* Core Services Section */}
      <section className="py-20 px-6 sm:px-4 max-w-[1280px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-0 mt-0 leading-relaxed">
          Our Core Services
        </h2>
        <h3 className="text-2xl font-normal text-center mb-10 mt-6 leading-relaxed">
          Explore our comprehensive range of technology solutions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={service.image}
                alt="service icon"
                className="w-16 h-16"
              />
              <h3 className="font-semibold text-xl mt-8 mb-2">
                {service.title}
              </h3>
              <p className="mb-4 mt-6 text-gray-600 text-[16px] font-normal line-clamp-3">
                {service.description}
              </p>

              {/* Hover Popup */}
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 rounded-3xl shadow-2xl p-6 z-10 transition-all duration-300">
                  <h3 className="font-semibold text-xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
