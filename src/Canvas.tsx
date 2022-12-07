import React, { useEffect, useRef } from "react";

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // if()
  }, []);

  return <canvas ref={canvasRef} />;
};
