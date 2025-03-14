import Header from "@/components/ui/sections/Header";
import ChatInterface from "@/app/assistant/chat/ChatInterface";

export default function Page() {
  return (
    <main className="scroll-hide relative mx-auto h-screen max-w-7xl">
      <svg
        className="absolute bottom-0 opacity-20 blur-3xl"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="#72b894" offset="0%"></stop>
            <stop id="stop2" stopColor="#72b894" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M4.3,-4.9C6.7,-3.1,10.7,-2.8,16.6,1.4C22.5,5.6,30.2,13.7,28.4,15.9C26.6,18.1,15.2,14.3,7.2,15.2C-0.7,16.1,-5.3,21.6,-12.6,23.7C-19.8,25.8,-29.7,24.3,-31.5,19.2C-33.3,14,-26.9,5.2,-23.9,-2.9C-20.9,-11,-21.2,-18.3,-17.8,-20C-14.3,-21.7,-7.2,-17.7,-3.1,-14C0.9,-10.2,1.8,-6.8,4.3,-4.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
        ></path>
      </svg>
      <Header currentPage="assistant" />
      <div className="absolute right-0 z-50 min-h-full w-[2px] border-r border-white/10 transition dark:border-black/10"></div>
      <div className="absolute right-0 left-0 z-50 min-h-full w-[2px] border-r border-white/10 transition dark:border-black/10"></div>

      <ChatInterface />
    </main>
  );
}
