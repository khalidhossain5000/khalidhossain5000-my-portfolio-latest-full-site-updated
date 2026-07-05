"use client";

import Image from "next/image";
import { HashLoader } from "react-spinners";
import logo from "../assets/logo/kk-lgos-removebg-preview.png";

const Loading = () => {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(103,230,76,0.16),_transparent_55%),#080b05] px-6 py-10">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex items-center gap-3 rounded-full border border-primary/25 bg-background/70 px-5 py-3 shadow-[var(--glow-soft)] backdrop-blur-xl sm:gap-4 sm:px-6">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background-surface/80 p-2 shadow-[var(--glow-soft)] sm:h-14 sm:w-14">
            <Image
              src={logo}
              alt="Khalid logo"
              width={42}
              height={42}
              className="object-contain"
              priority
            />
          </div>

          <h1 className="font-special text-xl font-bold tracking-wide text-foreground sm:text-2xl lg:text-3xl">
            Khalid Hossain
          </h1>
        </div>

        <div className="flex flex-col items-center gap-3">
          <HashLoader color="#67e64c" size={28} loading />
          <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">
            Loading portfolio...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
