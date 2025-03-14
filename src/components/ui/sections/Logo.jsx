"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import AnimatedGradientTextMain from "@/components/ui/magic-ui/AnimatedGradientTextMain";

export default function Logo() {
  const svgVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.8,
      },
    },
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden">
      <div className="absolute -bottom-12 z-[-2] h-full w-full bg-[radial-gradient(ellipse_10%_60%_at_50%_130%,#72b894,rgba(255,255,255,0))] blur-3xl"></div>
      <div className="relative z-0 flex w-full items-center justify-center gap-2 overflow-hidden p-10">
        <div>
          <div className="absolute mx-auto h-[32] w-[32] bg-[#72b894] blur"></div>
          <motion.div
            className="rounded-3xl border border-white/10 backdrop-blur-xl dark:border-black/20"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <svg width="100" height="100" viewBox="0 0 826 832" fill="none">
              <motion.path
                className="dark:fill-none"
                d="M254.999 204.192L591.704 554.878L13.0819 1137.17C11.1416 1139.13 7.9881 1139.14 6.02683 1137.21L-332.881 803.456C-334.855 801.512 -334.873 798.336 -332.921 796.37L254.999 204.192Z"
                fill="url(#paint0_linear_406_942)"
                fillOpacity="0.06"
                initial="hidden"
                animate="visible"
              />
              <motion.path
                className="stroke-white stroke-3 dark:stroke-black"
                d="M237.79 237.823L415.922 349.651L660.563 160.519L462.595 398.067L567.822 580.175L415.922 474.654L145.05 657.479L340.152 391.437L237.79 237.823Z"
                fill="url(#paint1_linear_406_942)"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.path
                className="fill-white dark:fill-black"
                d="M253.697 204.337L424.673 329.754L606.127 202.637L472.449 379.313L591.518 554.769L420.541 429.352L239.087 556.469L372.766 379.793L253.697 204.337Z"
                fillOpacity="0.7"
                initial="hidden"
                animate="visible"
              />
              <motion.path
                d="M243.884 236L341.27 390.883L145 658L416.932 475.433L572 582.429"
                stroke="url(#paint2_linear_406_942)"
                strokeWidth="1.5"
                initial="hidden"
                animate="visible"
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
          </motion.div>
        </div>
        <div>
          <AnimatedGradientTextMain />
        </div>
      </div>
    </div>
  );
}
