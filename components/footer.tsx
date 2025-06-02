"use client"

import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-orange-50 py-12" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            <div className="flex flex-wrap gap-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Personal
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Business
              </a>
            </div>

            <div className="order-first lg:order-none pb-4">
              <Image src="/logo.png" alt="Igba Ayo Logo" width={120} height={60} className="h-12 w-auto" />
            </div>

            <div className="text-right">
              <p className="text-gray-700 text-sm mb-2">info@igbaayo.com | vendor@igbaayo.com</p>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="text-lg">🎵</span>
              </a>
            </div>

            <div className="text-center lg:text-right">
              <p className="text-gray-500 text-sm mb-1">© 2019 Lit Media. All rights reserved.</p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <a href="#" className="hover:text-gray-700">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-gray-700">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
