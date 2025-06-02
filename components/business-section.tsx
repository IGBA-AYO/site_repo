"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BusinessSection() {
  return (
    <section id="business" className="py-6 sm:py-10 bg-white">
      <div className="px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden h-[800px] sm:h-[700px]">
          <div className="hidden md:flex relative h-full w-full">
            <Image
              src="/business1.png"
              alt="Business"
              fill
              className="object-cover z-0"
              priority
            />

            {/* Overlay Card */}
            <div className="absolute inset-0 flex items-center justify-start px-8 z-10">
              <div className="bg-[#DEA968] bg-opacity-90 rounded-3xl p-6 max-w-md w-full flex flex-col gap-4">
                <div className="rounded-lg px-4 py-2">
                  <h4 className="text-white text-lg font-medium bg-[#F2C891] p-2 rounded-xl w-28 text-center">
                    Business
                  </h4>
                </div>

                <div className="rounded-lg px-4 py-3">
                  <h2 className="text-white text-3xl font-bold leading-tight">
                    Grow Your
                    <br />
                    Hustle. Digitally.
                  </h2>
                </div>

                <div className="rounded-lg px-4 py-3">
                  <p className="text-white text-sm leading-relaxed">
                    Are you a DJ, hotel manager, caterer, decorator, or Asoebi
                    seller? Igba Ayó is your gateway to more bookings, less
                    stress, and steady growth.
                  </p>
                </div>

                <div className="mt-2">
                  <Button className="bg-white text-[#101F40] font-bold hover:bg-white/90 rounded-3xl px-6 py-5 h-auto text-md">
                    Register as a vendor
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="bg-[#DEA968] rounded-3xl p-6 flex flex-col gap-4">
              <div className="rounded-lg px-4 py-2">
                <h4 className="text-white text-lg font-medium bg-[#F2C891] p-2 rounded-xl w-28 text-center">
                  Business
                </h4>
              </div>

              <div className="rounded-lg px-4 py-3">
                <h2 className="text-white text-3xl font-bold leading-tight">
                  Grow Your
                  <br />
                  Hustle. Digitally.
                </h2>
              </div>

              <div className="rounded-lg px-4 py-3">
                <p className="text-white text-sm leading-relaxed">
                  Are you a DJ, hotel manager, caterer, decorator, or Asoebi
                  seller? Igba Ayó is your gateway to more bookings, less
                  stress, and steady growth.
                </p>
              </div>

              <div className="mt-2">
                <Button className="bg-white text-[#101F40] font-bold hover:bg-white/90 rounded-3xl px-6 py-5 h-auto text-md">
                  Register as a vendor
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Image
                src="/business-image.png"
                alt="Business"
                width={400}
                height={300}
                className="rounded-3xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
