"use client";

import { useEffect, useRef } from "react";
import "./SmoothScroll.css";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    const contentEl = content.current;
    if (!el || !contentEl) return;

    let previous = 0;
    const ease = 0.08;

    const updateBodyHeight = () => {
      const height = contentEl.getBoundingClientRect().height;
      document.body.style.height = height + "px";
    };

    setTimeout(updateBodyHeight, 100); // Allow rendering
    window.addEventListener("resize", updateBodyHeight);

    const smooth = () => {
      previous += (window.scrollY - previous) * ease;
      el.style.transform = `translateY(-${previous}px)`;
      requestAnimationFrame(smooth);
    };

    smooth();

    return () => {
      window.removeEventListener("resize", updateBodyHeight);
    };
  }, []);

  return (
    <div ref={container} className="smooth-container">
      <div ref={content} className="smooth-content">
        {children}
      </div>
    </div>
  );
}