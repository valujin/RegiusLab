// src/components/VantaBackground.jsx
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 0.7,

          color: 0x5bd3c3,
          backgroundColor: 0x0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-full  text-red-700 scale-[-2]" />;
};

export default VantaBackground;
