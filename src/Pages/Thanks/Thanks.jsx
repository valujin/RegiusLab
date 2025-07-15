import React, { useEffect, useRef } from "react";
import happyRobot from "/img/happyRobot.svg";
import sadRobot from "/img/sadRobot.svg";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function Thanks() {
  const navigate = useNavigate();
  const sadRef = useRef(null);
  const happyRef = useRef(null);

  useEffect(() => {
    const moodTimer = setTimeout(() => {
      gsap.timeline()
        .to(happyRef.current, { opacity: 1, duration: 1, ease: "power1.inOut" })
        .to(sadRef.current,   { opacity: 0, duration: 1, ease: "power1.inOut" }, 0);
    }, 200);

    const redirectTimer = setTimeout(() => navigate("/questions"), 3000);

    return () => {
      clearTimeout(moodTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className=" flex flex-col gap-8 justify-center items-center fixed h-screen w-screen    bg-black top-0 left-0 right-0 bottom-0">
      <p className="text-white font-semibold text-center text-2xl leading-7 tracking-wider w-11/12">
        Ура, вы спасли робота!
      </p>

      <div className="relative w-64 h-64">
        <img
          ref={sadRef}
          src={sadRobot}
          alt="Грустный робот"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <img
          ref={happyRef}
          src={happyRobot}
          alt="Весёлый робот"
          className="absolute inset-0 w-full h-full object-contain opacity-0"
        />
      </div>
    </div>
  );
}
