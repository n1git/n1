"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Script from "next/script";
import { withBasePath } from "@/app/base-path";

type ScrollCraftGlobal = Window & {
  ScrollCraft?: { mount: (root?: Element | Document) => void };
};

type HeroScrubProps = {
  children: ReactNode;
};

export default function HeroScrub({ children }: HeroScrubProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    function attachSources() {
      const video = videoRef.current;
      if (!video) return;
      video.setAttribute("data-sc-src", withBasePath("/hero/n1-hero.mp4"));
      video.setAttribute("data-sc-src-mobile", withBasePath("/hero/n1-hero-m.mp4"));
    }
    if (window.scrollY > 0) {
      attachSources();
      return;
    }
    window.addEventListener("scroll", attachSources, { once: true, passive: true });
    return () => window.removeEventListener("scroll", attachSources);
  }, []);

  function mount() {
    const w = window as ScrollCraftGlobal;
    w.ScrollCraft?.mount();
  }

  return (
    <section
      className="hero"
      data-sc-act="scrub"
      data-sc-span="2.6"
      data-sc-dwell="0.35"
      ref={rootRef}
    >
      <div className="sc-stage" data-sc-stage>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="sc-stage__poster" src={withBasePath("/hero/n1-hero-poster.webp")} alt="" />
        <video ref={videoRef} data-sc-scrub playsInline muted />
        <div className="hero-scrim" />
        <div className="container" data-sc-cue="0 0.75 0 0.35">
          {children}
        </div>
      </div>
      <Script src={withBasePath("/scroll-craft/scrollcraft.js")} strategy="afterInteractive" onLoad={mount} />
    </section>
  );
}
