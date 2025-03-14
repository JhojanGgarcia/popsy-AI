import { Forward, Send } from "lucide-react";
import Button from "../../Button";
import Github from "@/components/icons/Github";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="items-center justify-between px-4 sm:flex">
        <p className="font-light text-gray-300 dark:text-black/80">
          © 2025{" "}
          <span className="font-pacifico font-light text-[#72b894]/60 dark:text-black/50">
            Popsy
          </span>
          . All rights reserved.
        </p>
        <div className="mt-6 flex items-center gap-x-6 text-gray-400">
          <Link href="https://github.com/JhojanGgarcia/popsy-AI">
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
}
