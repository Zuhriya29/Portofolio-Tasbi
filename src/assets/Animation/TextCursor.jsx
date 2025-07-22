import { useEffect } from "react";

const TextCursor = ({ text = "✨" }) => {
  useEffect(() => {
    let lastTime = 0;
    const spacingDelay = 100; // delay antar ikon (dalam ms)

    const createDot = (x, y) => {
      const span = document.createElement("span");
      span.innerText = text;
      span.style.position = "fixed";
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;
      span.style.pointerEvents = "none";
      span.style.transform = "translate(-50%, -50%)";
      span.style.zIndex = "9999";
      span.style.fontSize = "20px"; // Ukuran ikon lebih besar
      span.style.opacity = "1";
      span.style.transition = "opacity 5s ease"; // Pergerakan lambat
      span.style.userSelect = "none";
      document.body.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "0";
        setTimeout(() => span.remove(), 1000);
      }, 100); // Delay muncul sebelum fade-out
    };

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > spacingDelay) {
        createDot(e.clientX, e.clientY);
        lastTime = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [text]);

  return null; // Tidak perlu komponen visual
};

export default TextCursor;
