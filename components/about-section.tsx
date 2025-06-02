"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl text-black">
              What is Ìgbà Àyó App™?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2  items-start md:gap-4">
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101F40] mb-8 leading-tight">
                Africa's All-in-One Platform For Events, Travel & Vendor
                Services
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                Igba Ayo (meaning Season of Joy in Yoruba) is a vibrant mobile
                app designed to help locals and visitors discover, book, and
                enjoy events, experiences, and services across Nigeria and
                beyond.
              </p>
              <p>
                From concerts and beach parties to weekend getaways and cultural
                festivals, Igba Ayo brings together ticketing, travel planning,
                vendor bookings, and secure payments – all in one seamless
                experience.
              </p>
            </div>
          </div>

          <div className="mt-6 relative rounded-3xl overflow-hidden w-full">
            <div className="relative w-full h-[500px]  lg:h-[550px]">
              <Image
                src="/images/group-friends.png"
                alt="Group of friends celebrating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h4 className="text-lg font-medium mb-4">Our Mission</h4>
                <p className="text-white/90 leading-relaxed text-lg max-w-xl font-bold">
                  To redefine the way Africa celebrates, travels, and connects
                  by building a trusted digital ecosystem for events, tourism,
                  and local businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
