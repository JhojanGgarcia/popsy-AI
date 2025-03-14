import { BentoCard } from "@/components/ui/magic-ui/resources-ui/BentoGrid";
import { LogoCluster } from "@/components/ui/magic-ui/resources-ui/LogoCluster";

export default function Features() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <BentoCard graphic={<LogoCluster />} />
    </div>
  );
}
