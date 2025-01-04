import { services } from "../data/service";

export default function Services() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="text-[#FF6868] uppercase text-sm font-medium tracking-wider">
              Our Story & Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Our Culinary Journey <br /> And Services
            </h2>
            <p className="text-gray-600 font-semibold leading-relaxed">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#2CD761] text-white px-8 py-3 rounded-full hover:bg-[#25C256] transition-colors">
                Explore
              </button>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white text-center p-6 rounded-2xl shadow-lg hover:shadow-md transition-shadow"
              >
                <div className="rounded-full flex items-center justify-center mb-4">
                  <img
                    className="w-10 h-10"
                    src={service.icon}
                    alt={service.title}
                  />
                </div>
                <h3 className="font-semibold text-[#2CD761] text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#90BD95]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
