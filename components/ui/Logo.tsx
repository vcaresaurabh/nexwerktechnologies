import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
  dark?: boolean;
}

export default function Logo({ className = "", dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="NexWerk Technologies — Home"
      className={`inline-flex items-center group ${className}`}
    >
      <Image
        src="/logo.png"
        alt="NexWerk Technologies"
        width={1455}
        height={392}
        priority
        className={`h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105 ${
          dark ? "drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]" : ""
        }`}
      />
    </Link>
  );
}
