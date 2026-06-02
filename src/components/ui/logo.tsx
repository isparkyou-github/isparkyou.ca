import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className = "", href = "/" }: LogoProps) {
  return (
    <Link
      aria-label="iSparkYou home"
      className={`inline-flex items-center gap-0.5 text-[1.65rem] font-extrabold tracking-[-0.08em] text-[#061956] ${className}`}
      href={href}
    >
      <span>iSpark</span>
      <svg
        aria-hidden="true"
        className="mx-[-0.18rem] h-8 w-5 shrink-0 text-[#0758ff]"
        viewBox="0 0 24 40"
      >
        <path d="M15.6 1 2 22.8h8.3L6.7 39 22 16.2h-8.8L15.6 1Z" fill="currentColor" />
      </svg>
      <span>You</span>
    </Link>
  );
}
