import { Download } from "lucide-react";
import { TooltipBlock } from "@/components/Tooltip";

export default function DownloadButton({ code, fileName = "animation.jsx" }) {
  const handleDownload = () => {
    if (!code.trim()) return;

    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <TooltipBlock
      tooltipText="Download"
      className="-bottom-[50px] z-50 backdrop-blur-3xl"
    >
      <button
        type="button"
        onClick={handleDownload}
        className="hover:bg-muted/50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border border-dashed border-white/10 hover:rounded-full dark:border-black/30"
      >
        <Download className="h-4 w-4 text-white dark:text-black/70" />
      </button>
    </TooltipBlock>
  );
}
