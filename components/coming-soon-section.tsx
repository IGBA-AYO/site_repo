"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ComingSoonSection() {
  return (
    <section className="py-16 sm:py-24 " id="download">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-16">
              <div className="text-white">
                <span className="inline-block text-gray-300 text-sm font-medium mb-6">Coming Soon!</span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Igba Ayo App™ launches soon on iOS and Android.
                </h2>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Be the first to experience the future of fun.
                </p>

                <Button className="bg-white text-slate-800 hover:bg-gray-100 font-semibold px-8 py-3">
                  Join Waiting List
                </Button>
              </div>

              <div className="relative">
                <Image
                  src="/hero-phones.png"
                  alt="Mobile app coming soon"
                  width={400}
                  height={500}
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
