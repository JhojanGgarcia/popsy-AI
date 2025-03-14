import Header from "@/components/ui/sections/Header";
import Hero from "@/components/ui/sections/Hero";
import Logo from "@/components/ui/sections/Logo";
import Features from "@/components/ui/sections/Features";
import Collections from "@/components/ui/sections/Collection";
import Faq from "@/components/ui/sections/Faq";
import Footer from "@/components/ui/sections/Footer";

import { BottomBlurOut } from "@/components/ui/magic-ui/resources-ui/BottomBlurEffect";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-7xl">
      <Header />
      <div className="absolute top-0 right-0 z-50 h-full w-[2px] border-r border-white/10 transition dark:border-black/10"></div>
      <div className="absolute top-0 right-0 left-0 z-50 h-full w-[2px] border-r border-white/10 transition dark:border-black/10"></div>
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center">
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[4px] -bottom-[3px] z-2 text-white transition dark:text-black"
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
        <Hero />
      </section>
      <section className="relative flex min-h-[20vh] flex-col items-center justify-center">
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[4px] -bottom-[3px] z-2 text-white transition dark:text-black"
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
        <Logo />
      </section>
      <section className="relative flex min-h-[20vh] flex-col items-center justify-center">
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[4px] -bottom-[3px] z-2 text-white transition dark:text-black"
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
        <Collections />
      </section>
      <section className="relative flex min-h-[20vh] flex-col items-center justify-center">
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[4px] -bottom-[3px] z-2 text-white transition dark:text-black"
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
        <Features />
      </section>
      <section className="over relative flex min-h-[20vh] flex-col items-center justify-center">
        <div className="absolute top-0 -z-10 h-full w-full">
          <div className="absolute top-0 right-0 bottom-auto left-auto h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#72b894]/20 opacity-50 blur-[80px]"></div>
        </div>
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[4px] -bottom-[3px] z-2 text-white transition dark:text-black"
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
        <Faq />
      </section>
      <section className="over relative flex min-h-[20vh] flex-col items-center justify-center">
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[4px] -bottom-[3px] z-2 text-white transition dark:text-black"
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
        <Footer />
      </section>
      <BottomBlurOut />
    </main>
  );
}
