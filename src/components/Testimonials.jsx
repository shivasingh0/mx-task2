import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const reviewImg = [
    {
      id: 1,
      src: "/assets/review1.png",
      alt: "Customer",
      bg: "bg-[#ffe8ad]",
    },
    {
      id: 2,
      src: "/assets/review2.png",
      alt: "Customer",
      bg: "bg-[#c5cace]",
    },
    {
      id: 3,
      src: "/assets/review3.png",
      alt: "Customer",
      bg: "bg-[#64b4bb]",
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] relative z-0">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Chef Image */}
          <div className="relative">
            <div className="absolute bg-[#53EC62] w-full h-1/2 bottom-0 rounded-b-[30px] rounded-t-[170px] transform -z-10"></div>
            <img
              src="/assets/shafe.png"
              alt="Our Best Chef"
              className="relative z-10 w-full max-w-sm mx-auto md:max-w-md"
            />
            <div className="absolute z-50 -bottom-20 -right-10 md:-right-40">
              <span className="absolute -top-12 transform rotate-90 z-[999] left-16 md:left-32 text-xl md:text-3xl">
                🍕
              </span>
              <span className="absolute -top-24 transform -rotate-45 z-[999] -left-48 md:-left-96 text-xl md:text-3xl">
                😋
              </span>
              <img
                src="/assets/rectangle.png"
                alt="Decorative background"
                width={400}
                height={100}
                className="w-52 md:w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-black text-base md:text-xl font-medium px-4 md:px-8 text-center">
                  Our Best Chef 😁
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-red-500 font-medium tracking-wider">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-4xl font-bold">
              What Our Customers Say About Us
            </h2>
            <blockquote className="text-gray-600 text-base md:text-lg leading-relaxed">
              "I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable."
            </blockquote>

            <div className="flex flex-col md:flex-row items-center md:justify-start gap-6 md:gap-32">
              <div className="flex -space-x-4">
                {reviewImg.map((i) => (
                  <img
                    key={i.id}
                    src={i.src}
                    alt={`Customer`}
                    className={`${i.bg} object-cover w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white`}
                  />
                ))}
              </div>
              <div>
                <h4 className="font-semibold">Customer Feedback</h4>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium ml-1">4.9</span>
                  </div>
                  <span className="text-sm text-gray-500">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
