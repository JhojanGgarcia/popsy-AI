"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

import { TooltipBlock } from "@/components/Tooltip";

import Switch from "@/components/Switch";
import Link from "next/link";

export default function Header({ currentPage }) {
  return (
    <header className="relative top-0 z-50 mx-auto flex h-16 items-center justify-center overflow-visible border-white/10 bg-[radial-gradient(circle_at_left,rgba(130,130,130,0.15)_0%,transparent_30%)] p-3 backdrop-blur-2xl md:bg-[radial-gradient(circle_at_top,rgba(130,130,130,0.15)_0%,transparent_30%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,transparent_30%)]">
      {currentPage === "assistant" && (
        <>
          <div className="absolute right-0 z-50 min-h-full w-[2px] border-r border-white/10 transition dark:border-black/10"></div>
          <div className="absolute right-0 left-0 z-50 min-h-full w-[2px] border-r border-white/10 transition dark:border-black/10"></div>
        </>
      )}
      <svg
        width="10"
        height="10"
        viewBox="0 0 8 8"
        fill="none"
        aria-hidden="true"
        className="absolute -right-[4px] -bottom-[3px] text-white transition dark:text-black"
      >
        <path
          opacity="0.4"
          d="M4 0V8M8 4L0 4"
          stroke="currentColor"
          fillOpacity="0.4"
        ></path>
      </svg>
      <svg
        width="10"
        height="10"
        viewBox="0 0 8 8"
        fill="none"
        aria-hidden="true"
        className="absolute -bottom-[3px] -left-[4px] z-2 text-white transition dark:text-black"
      >
        <path
          opacity="0.4"
          d="M4 0V8M8 4L0 4"
          stroke="currentColor"
          fillOpacity="0.4"
        ></path>
      </svg>
      <div className="absolute bottom-0 left-0 z-1 h-[2px] w-full border-t border-white/10 dark:border-black/10"></div>
      <nav
        className={`relative mx-auto flex h-full w-7xl items-center justify-center ${
          currentPage === "assistant" ? "items-start" : ""
        }`}
      >
        <svg width="45" height="45" viewBox="0 0 826 832" fill="none">
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
        {currentPage === "assistant" && (
          <div className="inline rounded-md border border-dashed border-white/10 px-1 py-0.5 text-xs font-light text-white dark:border-black/50 dark:text-black/70">
            Beta
          </div>
        )}
        <div className="absolute right-0 flex items-center justify-center gap-2 p-2">
          <Switch />
        </div>
        <div className="absolute top-1 left-2 flex items-center justify-center gap-2">
          {currentPage === "assistant" && (
            <TooltipBlock tooltipText="Back" className="-bottom-14">
              <Link
                href="/"
                className="group flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 p-2 dark:border-black/10"
              >
                <span className="flex items-center text-nowrap">
                  <ArrowLeft className="h-4 w-4 text-white/50 transition duration-100 group-hover:scale-105 group-hover:rotate-3 dark:text-black/50" />
                </span>
              </Link>
            </TooltipBlock>
          )}
        </div>
      </nav>
    </header>
  );
}
