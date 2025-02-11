"use client";
import { data } from "@/app/_RTK/DataSlice";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tooltip from "../sections/Info";

const Card = ({ name, sys, wind, main }: data) => {
  useGSAP(() => {
    gsap.to("#card", {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      delay: 0.2,
      y: 0,
      ease: "power2.inOut",
    });
  }, []);
  const data = new Date();
  const sunrise = sys?.sunrise;
  const sunset = sys?.sunset;
  const am_pm = data.toLocaleTimeString();
  return (
    <div
      id="card"
      style={{ scale: 0.5, transform: "translateY(200px)" }}
      className="opacity-0 group relative w-80 z-10 "
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-500 to-indigo-500 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-sky-500/25">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M20%2016.2A4.5%204.5%200%200017.5%208h-1.8A7%207%200%104%2014.9%22%2F%3E%3Cpath%20d%3D%22M12%2012v9%22%2F%3E%3Cpath%20d%3D%22M8%2017l4%204%22%2F%3E%3Cpath%20d%3D%22M16%2017l-4%204%22%2F%3E%3C%2Fsvg%3E')] bg-center opacity-5" />
        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-sm text-white/80">
                {name} {sys?.country}
              </p>
            </div>
            <span className="text-sm text-white/80">{am_pm}</span>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-start">
              <span className="text-6xl font-bold text-white">
                {(main?.temp - 273.15).toFixed(2)}°
              </span>
              <span className="mt-1 text-2xl text-white/80">c</span>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/20 blur-xl transition-opacity duration-300 group-hover:opacity-75" />
              <svg
                className="relative h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-1">
              <svg
                className="h-6 w-6 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span className="text-sm font-medium text-white">Humidity</span>
              <span className="text-lg font-semibold text-white">
                {main?.humidity}
                <span className="text-sm">%</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                className="h-6 w-6 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                />
              </svg>
              <span className="text-sm font-medium text-white">Wind</span>
              <span className="text-lg font-semibold text-white">
                {wind?.speed} <span className="text-[10px]">m/s</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <svg
                className="h-6 w-6 text-white/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
              <span className="text-sm font-medium text-white">UV Index</span>
              <span className="text-lg font-semibold text-white">6</span>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="mb-4 text-sm font-medium text-white/80">
              More Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">
                  الشروق | sunrise
                </span>
                <div className="flex items-center gap-4">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  <div className="flex gap-2">
                    <span className="text-sm font-semibold text-white">
                      {new Date(sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium text-white">
                  الغروب | sunset
                </span>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/moon.svg"}
                    alt="moon"
                    width={20}
                    height={20}
                    className=""
                  ></Image>
                  <div className="flex gap-2">
                    <span className="text-sm font-semibold text-white">
                      {new Date(sunset * 1000).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Tooltip />
      </div>
    </div>
  );
};

export default Card;
