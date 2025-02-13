import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition() {
  const blueRef = useRef(null);
  const whiteRef = useRef(null);
  const redRef = useRef(null);

  useEffect(() => {
    gsap.to(blueRef.current, {
      duration: 0.6,
      yPercent: -100,
      ease: "power4.out",
    });
    gsap.to(whiteRef.current, {
      duration: 0.6,
      yPercent: -100,
      ease: "power4.out",
      delay: 0.2,
    });
    gsap.to(redRef.current, {
      duration: 0.6,
      yPercent: -100,
      ease: "power4.out",
      delay: 0.4,
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      <div
        ref={redRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          top: 0,
        }}
      ></div>
      <div
        ref={whiteRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
        }}
      ></div>
      <div
        ref={blueRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "blue",
          top: 0,
        }}
      ></div>
    </div>
  );
}
