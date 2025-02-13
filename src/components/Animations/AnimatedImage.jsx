import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedImage() {
  const blueRef = useRef(null);
  const whiteRef = useRef(null);
  const redRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(blueRef.current, {
      duration: 1,
      yPercent: -100,
      ease: "power4.out",
    });
    gsap.to(whiteRef.current, {
      duration: 1,
      yPercent: -100,
      ease: "power4.out",
      delay: 0.05,
    });
    gsap.to(redRef.current, {
      duration: 1,
      yPercent: -100,
      ease: "power4.out",
      delay: 0.1,
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "black", // Fond noir pour éviter le blanc visible
      }}
    >
      <img
        ref={imageRef}
        src="/public/ml.jpeg"
        alt="Image à afficher"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
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
          top: 0,
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
