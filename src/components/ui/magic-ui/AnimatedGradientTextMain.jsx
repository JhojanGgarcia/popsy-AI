import React from "react";
import { AnimatedGradientText } from "@/components/ui/magic-ui/AnimatedGradientText";
import { ChevronRight, MoveUpRight } from "lucide-react";

export default function AnimatedGradientTextMain() {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-2xl py-1.5 duration-500 ease-out">
      <AnimatedGradientText className="z-10 mx-auto max-w-xl text-xl leading-relaxed tracking-wide font-extrabold text-white/40 sm:text-lg md:text-3xl dark:text-black">
        Popsy <span className="dark:font-bold ">AI</span>
      </AnimatedGradientText>
    </div>
  );
}
