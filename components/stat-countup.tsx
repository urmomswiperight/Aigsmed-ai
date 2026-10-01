"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function StatCountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: StatCountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function RangeStatCountUp({
  endStart,
  endFinal,
  prefix = "$",
  suffix = "M",
  duration = 1.6,
}: {
  endStart: number;
  endFinal: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setVal1(Math.floor(eased * endStart));
      setVal2(Math.floor(eased * endFinal));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setVal1(endStart);
        setVal2(endFinal);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, endStart, endFinal, duration]);

  return (
    <span ref={ref}>
      {prefix}{val1}{suffix} - {prefix}{val2}{suffix}
    </span>
  );
}
