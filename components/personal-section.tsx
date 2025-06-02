"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";

const galleryImages = [
  { src: "/images/Discover-events.png", alt: "Outdoor dining experience" },
  { src: "/images/Book-accommodation.png", alt: "Friends in colorful outfits" },
  { src: "/images/Earn-Ìgbà-Credits™️.png", alt: "Party crowd celebrating" },
  { src: "/images/Hire-a-vendor.png", alt: "Couple at the beach" },
  { src: "/images/Pay-securely.png", alt: "Group of friends" },
  { src: "/images/unforgettable-experiences.png", alt: "Party girl" },
];

const featureTexts = {
  discover:
    "Find the best of Nigeria’s vibrant entertainment and cultural scene. From live concerts and beach parties to art exhibitions, comedy shows, and traditional festivals – Igba Ayo curates trending and upcoming events based on your location and interests, making it easy to plan your next outing.",
  book: "Whether you're escaping for a weekend getaway or attending an event in another city, Igba Ayo offers a seamless way to book hotels, short stays, car hires, and complete travel packages. Enjoy exclusive deals on accommodations and transportation – all in one place, without the stress.",
  earn: "Get rewarded every time you book, refer friends, or promote events. Ìgbà Credits can be used to get discounts on bookings, access premium features, or redeem for special offers. The more you use Igba Ayo, the more you earn – it’s joy that keeps giving.",
  hire: "Planning a party, wedding, or corporate event? Igba Ayo connects you with reliable service providers – DJs, MCs, caterers, decorators, photographers, and more. Browse verified vendors, view reviews, and hire directly through the app with confidence.",
  pay: "Your peace of mind is our priority. Igba Ayo supports multiple payment options including cards, transfers, and mobile wallets. All transactions are encrypted and secured, ensuring a smooth, safe checkout experience for every user.",
  experience:
    "At Igba Ayo, every feature is designed to turn your plans into joyful memories. From discovering new adventures to stress-free bookings and trusted services, we make sure each moment is easy, exciting, and unforgettable – just the way life should be.",
} as any;

const leftSideItems = [
  { id: "discover", label: "Discover Events" },
  { id: "book", label: "Book Accommodation" },
  { id: "earn", label: "Earn Ìgbà Credits™️" },
  { id: "hire", label: "Hire Vendor" },
  { id: "pay", label: "Pay Securely" },
  { id: "experience", label: "Unforgettable Experience" },
];

export default function PersonalSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeItem, setActiveItem] = useState("discover");
  const [imageWidth, setImageWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const scrollSpeed =
    typeof window !== "undefined" && window.innerWidth < 640 ? 0.3 : 0.5;
  const imageGap =
    typeof window !== "undefined" && window.innerWidth < 640 ? 12 : 16;

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        setContainerWidth(width);

        if (width < 640) {
          setImageWidth(300);
        } else if (width < 1024) {
          setImageWidth(320);
        } else {
          setImageWidth(400);
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getScrollPositionForImage = useCallback(
    (imageIndex: number) => {
      const totalImageWidth = imageWidth + imageGap;
      const centerOffset = (containerWidth - imageWidth) / 2;
      return imageIndex * totalImageWidth - centerOffset;
    },
    [imageWidth, imageGap, containerWidth]
  );

  const updateActiveItemFromScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const currentScroll = scrollRef.current.scrollLeft;
    const totalImageWidth = imageWidth + imageGap;
    const centerOffset = (containerWidth - imageWidth) / 2;

    const currentImageIndex =
      Math.round((currentScroll + centerOffset) / totalImageWidth) %
      galleryImages.length;

    const newActiveItem = leftSideItems[currentImageIndex]?.id || "discover";
    if (newActiveItem !== activeItem) {
      setActiveItem(newActiveItem);
    }
  }, [activeItem, imageWidth, imageGap, containerWidth]);

  const animateScroll = useCallback(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    scrollPositionRef.current += scrollSpeed;
    if (scrollPositionRef.current >= scrollWidth - clientWidth) {
      scrollPositionRef.current = 0;
    }

    scrollContainer.scrollLeft = scrollPositionRef.current;
    updateActiveItemFromScroll();

    animationRef.current = requestAnimationFrame(animateScroll);
  }, [scrollSpeed, updateActiveItemFromScroll]);

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animateScroll);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isPlaying, animateScroll]);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleItemClick = (itemId: string, index: number) => {
    setIsPlaying(false);
    setActiveItem(itemId);

    if (scrollRef.current) {
      let targetPosition = getScrollPositionForImage(index);

      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        const shiftFactor =
          index === 0
            ? -0.3
            : index === 1
            ? -0.44
            : index === 2
            ? -0.53
            : index === 3
            ? -0.61
            : index === 4
            ? -0.70
            : -0.78;
        targetPosition -= containerWidth * shiftFactor;
      }

      scrollRef.current.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });

      scrollPositionRef.current = targetPosition;
    }
  };

  return (
    <section id="personal" className="py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side */}
            <div className="order-1 lg:order-1">
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Personal
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Plan Less.
                <br />
                Enjoy More.
              </h2>
              <div className="space-y-3">
                {leftSideItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item.id, index)}
                    className="cursor-pointer relative overflow-hidden rounded-2xl px-2 py-1"
                  >
                    <div
                      className={`absolute top-0 left-0 h-full bg-gray-800 z-0 origin-left transition-all ease-in-out ${
                        activeItem === item.id ? "w-full" : "w-0"
                      }`}
                      style={{
                        borderRadius: "1rem",
                        transitionDuration: "3000ms",
                      }}
                    />
                    <span
                      className={`relative z-10 block px-4 py-3 text-lg font-medium transition-all ${
                        activeItem === item.id ? "text-white" : "text-gray-700"
                      }`}
                      style={{
                        transitionDuration: "3000ms",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="relative order-2">
              <div className="bg-orange-100 rounded-3xl p-4 sm:p-6 lg:p-8 relative">
                <button
                  onClick={togglePlayPause}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/80 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white transition-colors z-10 shadow-sm"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? (
                    <Pause size={16} className="sm:w-5 sm:h-5 text-gray-700" />
                  ) : (
                    <Play size={16} className="sm:w-5 sm:h-5 text-gray-700" />
                  )}
                </button>

                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-4 sm:mb-6 overflow-hidden">
                  <div
                    ref={scrollRef}
                    className="flex space-x-3 sm:space-x-4 overflow-x-hidden pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8"
                    style={{
                      scrollBehavior: "auto",
                      width: "94vw",
                    }}
                  >
                    {[...galleryImages, ...galleryImages, ...galleryImages].map(
                      (image, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-[300px] h-64 sm:w-[320px] sm:h-72 lg:w-[520px] lg:h-80 relative rounded-xl sm:rounded-2xl overflow-hidden"
                        >
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index < 4}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed ">
                  {featureTexts[activeItem]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
