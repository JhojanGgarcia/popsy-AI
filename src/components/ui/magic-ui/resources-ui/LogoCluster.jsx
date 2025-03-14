"use client";

import {
  Gemini,
  CSS,
  Motion,
  Next,
  React,
  Tailwind,
} from "@/components/icons/svg-icons/SvgList";
import { motion } from "framer-motion";

function Mark({ className }) {
  return (
    <svg width="50" height="50" viewBox="0 0 826 832" fill="none">
      <path
        className="dark:fill-none"
        d="M254.999 204.192L591.704 554.878L13.0819 1137.17C11.1416 1139.13 7.9881 1139.14 6.02683 1137.21L-332.881 803.456C-334.855 801.512 -334.873 798.336 -332.921 796.37L254.999 204.192Z"
        fill="url(#paint0_linear_406_942)"
        fillOpacity="0.06"
      />
      <path
        className="stroke-white stroke-3 dark:stroke-black"
        d="M237.79 237.823L415.922 349.651L660.563 160.519L462.595 398.067L567.822 580.175L415.922 474.654L145.05 657.479L340.152 391.437L237.79 237.823Z"
        fill="url(#paint1_linear_406_942)"
      />
      <path
        className="fill-white dark:fill-black"
        d="M253.697 204.337L424.673 329.754L606.127 202.637L472.449 379.313L591.518 554.769L420.541 429.352L239.087 556.469L372.766 379.793L253.697 204.337Z"
        fillOpacity="0.7"
      />
      <path
        d="M243.884 236L341.27 390.883L145 658L416.932 475.433L572 582.429"
        stroke="url(#paint2_linear_406_942)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_406_942"
          x1="419.626"
          y1="382.495"
          x2="-6.14982"
          y2="841.395"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.63094" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_406_942"
          x1="243.121"
          y1="572.078"
          x2="476.408"
          y2="333.981"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.13" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_406_942"
          x1="412.437"
          y1="314.564"
          x2="401.974"
          y2="548.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.505" stopColor="white" stopOpacity="0.32" />
          <stop offset="1" stopColor="#999999" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Circle({ size, delay, opacity }) {
  return (
    <motion.div
      animate={{
        width: [`${size}px`, `${size + 10}px`, `${size}px`],
        height: [`${size}px`, `${size + 10}px`, `${size}px`],
      }}
      transition={{
        duration: 0.75,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
      style={{ "--opacity": opacity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.white)_var(--opacity),transparent)_100%)] ring-1 ring-white/[8%] ring-inset dark:bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.black)_var(--opacity),transparent)_100%)] dark:ring-black/[8%]"
    />
  );
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className="absolute inset-0" />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="absolute top-32 left-44 flex size-16 items-center justify-center rounded-full border border-white/5 ring-1 shadow ring-black/5 backdrop-blur-xs dark:border-black/20 dark:bg-white dark:ring-white/10">
      <Mark />
    </div>
  );
}

function Logo({ icon, left, top, hover }) {
  return (
    <motion.div
      animate={{
        x: [0, hover.x, 0],
        y: [0, hover.y, 0],
        rotate: [0, hover.rotate, 0],
      }}
      transition={{
        duration: 0.75,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: hover.delay,
      }}
      style={{ left, top }}
      className="absolute flex size-16 items-center justify-center rounded-full border border-white/5 backdrop-blur-xs dark:border-black/20"
    >
      {icon}
    </motion.div>
  );
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        <Logo
          icon={<React width="30" height="30" />}
          left={360}
          top={144}
          hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
        />
        <Logo
          icon={<Next width="30" height="30" />}
          left={285}
          top={20}
          hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
        />
        <Logo
          icon={<Tailwind width="30" height="30" />}
          left={255}
          top={210}
          hover={{ x: 3, y: 5, rotate: 7, delay: 0.2 }}
        />
        <Logo
          icon={<Motion width="30" height="30" />}
          left={144}
          top={40}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
        />
        <Logo
          icon={
            <Gemini
              className="fill-white/70 dark:fill-black"
              width="30"
              height="30"
            />
          }
          left={36}
          top={56}
          hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
        />
        <Logo
          icon={<CSS width="30" height="30" />}
          left={96}
          top={176}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
        />
      </div>
    </div>
  );
}
