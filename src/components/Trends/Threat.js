import React from "react";

const services = [
  {
    icon: "/images/bg1 (1).svg",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.",
  },
  {
    icon: "/images/bg1 (2).svg",
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet your specific business requirements and streamline operations.",
  },
  {
    icon: "/images/bg1 (3).svg",
    title: "SaaS Applications",
    description:
      "Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment.",
  },
  {
    icon: "/images/bg1 (4).svg",
    title: "AI Applications",
    description:
      "Intelligent applications powered by machine learning and artificial intelligence to automate and optimize processes.",
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 px-10 sm:px-4 max-w-[1280px] mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-orange-600 text-center mb-10">
        Track Emerging Misinformation Threats
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between overflow-x-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-6 w-full sm:w-[45%] lg:w-[22%] flex-shrink-0 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={service.icon} alt="icon" className="w-16 h-16" />
            <h3 className="font-semibold text-xl mt-8 mb-2">{service.title}</h3>
            <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
              {service.description}
            </p>
            <button
              onClick={() => alert(`More info about ${service.title}`)}
              className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-2 rounded transition-all"
            >
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
