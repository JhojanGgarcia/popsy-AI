"use client";

import BackgroundPaths from "@/components/ui/pattern-ui/circle-pattern";

import { TextGenerateEffectMain } from "../magic-ui/AnimatedTextEffect";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="absolute flex min-h-full w-full flex-col items-center justify-center overflow-hidden text-center">
      <svg
        className="absolute -top-1 -left-32 opacity-30 blur-3xl"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="#72b894" offset="0%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M1.1,-6.3C1.7,-1.7,2.5,-1.8,2.7,-1.5C3,-1.3,2.7,-0.6,5.9,1.9C9.2,4.4,16,8.8,16.3,10C16.7,11.3,10.5,9.5,6.7,14.9C2.9,20.4,1.5,33.1,0.2,32.7C-1,32.3,-2,18.8,-6.9,13.9C-11.8,9.1,-20.7,13.1,-24.5,12.2C-28.3,11.4,-27,5.7,-22.4,2.7C-17.7,-0.3,-9.6,-0.6,-5.7,-1.2C-1.7,-1.8,-1.9,-2.7,-1.7,-7.5C-1.4,-12.3,-0.7,-20.9,-0.2,-20.5C0.3,-20.2,0.6,-10.9,1.1,-6.3Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="url(#sw-gradient)"
        ></path>
      </svg>
      <div className="absolute flex h-full w-full max-w-5xl items-center justify-center overflow-hidden">
        <BackgroundPaths />
      </div>
      <div className="relative flex h-full w-full items-center justify-center px-10">
        <div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-7xl">
            <span className="text-white/80 dark:text-black/80">
              Eleveate Your
            </span>
            <br />
            <span className="text-white/80 dark:text-black/80">
              Framer &nbsp;
              <span className="font-pacifico text-nowrap text-[#72b894]/90 dark:text-[#72b894]">
                Animations.
              </span>
            </span>
          </h1>
        </div>
      </div>

      <TextGenerateEffectMain />

      <div className="flex gap-4">
        <Link
          href="/assistant"
          className="group flex transform-gpu cursor-pointer items-center gap-2 rounded-xl px-2 py-2 text-lg font-light tracking-wider text-nowrap text-white/80 shadow-[0_1px_1px_2.1px_rgba(0,0,0,0.1),_0_0_0.5px_1px_rgba(0,0,0,0.01),_inset_0_-20px_1px_1px_rgba(0,0,0,0.01),_inset_0_1px_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-xs transition-all duration-500 select-none hover:scale-105 active:scale-75 md:px-4 md:py-3 dark:text-black/80 dark:shadow-[0_1px_1px_2.1px_rgba(0,0,0,0.1),_0_0_0.5px_1px_rgba(0,0,0,0.01),_inset_0_-20px_1px_1px_rgba(0,0,0,0.01),_inset_0_1px_1px_1px_rgba(255,255,255,0.1)]"
        >
          <svg
            className="transition duration-300 group-hover:scale-125 group-hover:-rotate-6 dark:text-black/30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#fff4"
            fill="none"
          >
            <path
              d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            ></path>
          </svg>
          Get Started
        </Link>
      </div>
    </div>
  );
}
