"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-[calc(100vh-4rem)] relative z-0"
      >
        {/* Slides as you already have */}
        {/* Slide: Robovalley Main */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/worlds/robovalley.png')",
            }}
          >
            <h1 className="text-5xl text-white font-bold bg-black/40 p-6 rounded-xl text-center">
              Amaravati RoboValley
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide: Vidya–Nirman */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/worlds/vidya-nirman.png')",
            }}
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold bg-black/40 p-6 rounded-xl text-center">
              Vidya–Nirman
              <br />
              <span className="text-2xl font-normal">Learn &amp; Make</span>
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide: Anubhav–Lok */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/worlds/anubhav-lok.png')",
            }}
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold bg-black/40 p-6 rounded-xl text-center">
              Anubhav–Lok
              <br />
              <span className="text-2xl font-normal">Experience Center</span>
            </h1>
          </div>
        </SwiperSlide>

        {/* Slide: Kreeda–Mandap */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/worlds/kreeda-mandap.png')",
            }}
          >
            <h1 className="text-4xl md:text-5xl text-white font-bold bg-black/40 p-6 rounded-xl text-center">
              Kreeda–Mandap
              <br />
              <span className="text-2xl font-normal">
                Gaming &amp; Competition
              </span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
