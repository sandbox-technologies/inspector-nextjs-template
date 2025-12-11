import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Centered Content */}
      <div className="text-center space-y-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/inspector-logo.png"
            alt="Inspector"
            width={56}
            height={56}
            className="w-14 h-14 dark:invert"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Inspector Template
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Start building with Next.js, Tailwind, and shadcn/ui styling.
        </p>
      </div>
    </div>
  );
}
