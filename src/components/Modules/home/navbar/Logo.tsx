import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.svg"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0"
        priority
      />
      {showWordmark && (
        <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
          Corelytic<span className="text-purple-400">X</span>
        </span>
      )}
    </span>
  );
}
