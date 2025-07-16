import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedCounter({
  value,
  max = 60,           // максимальное значение для шкалы
  size = 80,          // диаметр SVG в пикселях
  strokeWidth = 8,    // толщина кольца
}) {
  const wrapperRef = useRef(null);
  const circleRef = useRef(null);

  // радиус и длина окружности
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // рассчитываем новый offset
    const offset = circumference * (1 - value / max);

    // анимируем заполнение круга
    gsap.to(circleRef.current, {
      strokeDashoffset: offset,
      duration: 0,
      ease: "power1.out",
    });

    // добавляем «всплеск» масштаба
    gsap.fromTo(
      wrapperRef.current,
      { scale: 1 },
      {
        scale: 1.3,
        duration: 0,
        ease: "power1.out",
        yoyo: true,
        repeat: 1,
      }
    );
  }, [value, circumference, max]);

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        {/* Базовое кольцо */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#ddd"
          strokeWidth={strokeWidth}
        />

        {/* Анимированное кольцо */}
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#D7AC45"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* Центр с цифрой */}
      <span className="absolute text-center text-2xl font-black">
        {value}
      </span>
    </div>
  );
}
