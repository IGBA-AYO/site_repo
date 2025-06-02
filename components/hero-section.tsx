"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Video autoplay failed:", err);
        });
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      const newTime = Math.max(
        0,
        Math.min(videoRef.current.currentTime + seconds, duration)
      );
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const imageList = [
    "/images/party-crowd.jpg",
    "/images/outdoor-dining.jpg",
    "/images/beach-couple.jpg",
    "/images/colorful-friends.jpg",
    "/images/party-girl.jpg",
    "/images/travel-couple.jpg",
  ];

  return (
    <section id="hero" className="min-h-screen pt-4 flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-6">
          {/* Video Card */}
          <div
            className="relative w-full h-[320px] sm:h-[400px] lg:h-[700px] bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl sm:rounded-3xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              poster="/images/outdoor-dining.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-20">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3"></div>

                    <div className="flex items-center space-x-3">
                      {/* Mute/Unmute */}
                      <button
                        onClick={handleToggleMute}
                        className="text-white hover:text-orange-500 transition-colors p-1"
                      >
                        {isMuted ? (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Header Text Overlay */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IA</span>
                </div>
                <span className="font-semibold text-sm sm:text-base">
                  One App. Endless Adventures.™
                </span>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 md:flex-[1.5] relative h-[300px] sm:h-[600px] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="hidden md:block absolute inset-0">
                <div className=" h-full flex flex-col">
                  <div className="flex-1 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="flex animate-scroll-left space-x-3">
                        {[
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,

                          ...imageList,

                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                          ...imageList,
                        ].map((src, index) => (
                          <div
                            key={`first-${index}`}
                            className="flex-shrink-0 w-32 h-32 sm:w-56 sm:h-64 relative rounded-lg overflow-hidden"
                          >
                            <Image
                              src={src}
                              alt={`Activity ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 px-6">
                      Your Ticket to Fun Anytime, Anywhere
                    </h3>
                    <Button className="m-6 mt-4 bg-white hover:bg-white text-black px-4 py-2 text-sm">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>

              <div className="md:hidden h-[300px] inset-0 bg-orange-50">
                <div className="relative h-[40px]">
                  <Image
                    src="/patterns.png"
                    alt="African Patterns"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-end">
                  <div className="p-6">
                    <h3 className="text-3xl font-bold text-[#101F40] mb-3">
                      Your Ticket to Fun Anytime, Anywhere
                    </h3>
                    <Button className="bg-white hover:bg-white rounded-lg text-black px-4 py-2 text-sm">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 md:flex-[1] relative h-[300px] sm:h-[600px] bg-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="p-6 sm:p-8 h-full flex items-center justify-center">
                <div className="relative w-full max-w-[220px] md:max-w-[440px]">
                  <Image
                    src="/hero-phones.png"
                    alt="Mobile App Interface"
                    width={200}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
