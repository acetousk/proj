"use client";
import Lottie from "lottie-react";
import animationData from "../app/animation.json";

export default function LottieGroovyWalk() {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
    />
  );
};