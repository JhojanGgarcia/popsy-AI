import Character from "@/components/Character";

export default function Collections() {
  const paragraph = `Every piece from Popsy is a canvas for your unique animations. Our animations blend minimal aesthetics with nature's beauty, allowing you to.`;

  return (
    <div className="relative flex min-h-full w-full flex-col items-center justify-center overflow-hidden py-24 text-center">
      <div className="absolute h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#000_1px,transparent_3px)]"></div>
      <div className="text-center">
        <h2 className="mb-6 text-4xl font-bold text-white/80 sm:text-5xl md:text-6xl dark:text-black/80">
          Animate &{" "}
          <span className="font-pacifico text-[#72b894]">create.</span>
        </h2>
        <Character value={paragraph} />
      </div>
    </div>
  );
}
