"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for smooth interpolation (lerp)
  const mousePos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touchscreens
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    let hasShown = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasShown) {
        setIsVisible(true);
        hasShown = true;
      }
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Immediate position for inner dot
      dotPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check if target or parent is clickable/interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select") ||
          target.closest('[role="button"]') ||
          target.closest(".cursor-pointer") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
        );
        setIsPointer(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth animation loop for trailing outer ring
    let animationFrameId: number;
    const render = () => {
      // Lerp smoothing factor
      const ease = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer animated cyan ring - smooth trailing with glow */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out will-change-transform flex items-center justify-center ${
          isPointer
            ? "w-11 h-11 border-2 border-cyan-400 bg-cyan-950/30 shadow-[0_0_22px_rgba(6,182,212,0.6)]"
            : isClicked
            ? "w-7 h-7 border-2 border-cyan-300 bg-cyan-900/40 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
            : "w-8 h-8 border border-cyan-400/80 bg-cyan-950/20 shadow-[0_0_14px_rgba(6,182,212,0.35)]"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        {/* Subtle inner pulse ring when hovering */}
        {isPointer && (
          <span className="w-full h-full rounded-full border border-cyan-300/40 animate-ping absolute inset-0 pointer-events-none" />
        )}
      </div>

      {/* Inner precise glowing dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[10000] rounded-full will-change-transform transition-[width,height,background-color] duration-150 ease-out ${
          isPointer
            ? "w-2.5 h-2.5 bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
            : "w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
