import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-bold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0758ff]",
        variant === "primary"
          ? "bg-[#0758ff] text-white shadow-[0_10px_24px_rgba(7,88,255,0.2)] hover:-translate-y-0.5 hover:bg-[#064ce0]"
          : "border border-[#afc4dd] bg-white text-[#09256f] hover:border-[#0758ff] hover:text-[#0758ff]",
        className,
      )}
      {...props}
    />
  );
}
