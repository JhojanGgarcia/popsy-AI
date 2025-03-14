import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { codeToHtml } from "shiki";
import useTheme from "@/hooks/UseTheme";
import { Check, Copy, CopyCheck } from "lucide-react";

import Button from "../../../components/Button";

export function Code({ code, language }) {
  const { theme } = useTheme();
  const [copy, setCopy] = useState("Copy");
  const [highlightedCode, setHighlightedCode] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy("Copied!");
    setTimeout(() => setCopy("Copy"), 2000);
  };

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighted = await codeToHtml(code, {
          lang: "jsx",
          theme: "tokyo-night",
        });
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre>${code}</pre>`);
      }
    };

    highlightCode();
  }, [code, language]);

  return (
    <div className="relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative mb-20 flex w-full items-center justify-center">
        <motion.div className="gutter relative mt-4 max-h-[50vh] w-full overflow-y-auto rounded-md border border-dashed border-white/10 pl-2 dark:border-black/20">
          <div className="relative">
            <Button
              text={copy}
              onClick={handleCopy}
              className={"absolute top-2 right-2 z-50"}
              icon={
                copy === "Copy" ? (
                  <Copy className="h-3 w-3" />
                ) : (
                  <Check className="h-3 w-3" />
                )
              }
            />
            <div className="flex flex-col">
              <motion.div
                className="overflow-x-auto text-xs [&_code]:break-all [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
