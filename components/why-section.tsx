"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const culturalImages = [
  { src: "/images/party-girl.jpg", alt: "Party scene" },
  { src: "/images/travel-couple.jpg", alt: "Travel couple" },
  { src: "/images/group-friends.png", alt: "Cultural event" },
  { src: "/images/party-crowd.jpg", alt: "Tourism" },
  { src: "/images/colorful-friends.jpg", alt: "Tourism" },
  { src: "/images/beach-couple.jpg", alt: "Tourism" },
];

export default function WhySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-800 text-center mb-12 sm:mb-16">
            Why Igba Ayo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div>
              <div className="bg-[#B5BDE2] rounded-3xl px-6 sm:px-8 lg:px-12 flex flex-col justify-end h-[320px] md:h-[380px]">
                <div className="rounded-2xl inline-block max-w-[280px] sm:max-w-[400px] mx-auto">
                  <Image
                    src="/Phone-two.png"
                    alt="App interface showing hotels"
                    width={200}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-900 mt-3 px-2">
                Culturally Rooted. Digitally Driven.
              </h3>
            </div>

            {/* Card 2 */}
            <div>
              <div className="bg-[#D2E8C8] rounded-3xl px-6 sm:px-8 lg:px-12 flex flex-col justify-end h-[300px] md:h-[380px]">
                <div className="rounded-2xl inline-block max-w-[280px] sm:max-w-[400px] mx-auto">
                  <Image
                    src="/Phone-one.png"
                    alt="App interface showing map"
                    width={200}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-900 mt-3 px-2">
                Built for Africa. Loved by the Diaspora.
              </h3>
            </div>

            {/* Card 3  */}
            <div>
              <div className="bg-[#F7EAD9] rounded-3xl overflow-hidden h-[380px] flex items-center">
                <div className="w-full">
                  <div
                    ref={scrollRef}
                    className="flex space-x-4 overflow-x-hidden w-full"
                    style={{ scrollBehavior: "auto" }}
                  >
                    {culturalImages.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-44 sm:w-44 h-64 sm:h-64 relative rounded-2xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {culturalImages.map((image, index) => (
                      <div
                        key={`dup-${index}`}
                        className="flex-shrink-0 w-44 sm:w-44 h-64 sm:h-64 relative rounded-2xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {culturalImages.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-44 sm:w-44 h-64 sm:h-64 relative rounded-2xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {culturalImages.map((image, index) => (
                      <div
                        key={`dup-${index}`}
                        className="flex-shrink-0 w-44 sm:w-44 h-64 sm:h-64 relative rounded-2xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {[
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                      ...culturalImages,
                    ].map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-44 sm:w-44 h-64 sm:h-64 relative rounded-2xl overflow-hidden shadow-lg"
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-900 mt-3 px-2">
                One-Stop Platform for Events & Tourism
              </h3>
            </div>

            {/* Card 4 */}
            <div>
              <div className="bg-[#BADCE9] rounded-3xl px-6 sm:px-8 lg:px-12 h-[300px] md:h-[380px] relative flex items-center justify-center">
                <div className="absolute bottom-4  left-10 sm:left-28 z-30">
                  <div className="w-32 h-16 relative">
                    <Image
                      src="/images/bus-icon.png"
                      alt="Bus icon"
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="max-w-[100px] sm:max-w-[200px]">
                      <Image
                        src="/images/phone-hotel.png"
                        alt="App interface showing hotels and bookings"
                        width={180}
                        height={280}
                        className="w-full h-auto drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-[22rem]  md:w-[32rem]">
                    <Image
                      src="/images/stadium.png"
                      alt="Stadium"
                      width={4500}
                      height={880}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-md font-medium text-gray-900 mt-3 px-2">
                Safe & Secure Transactions
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
