import React, { useEffect } from "react";
import "./AnimatedCursor.css";
import { useState } from "react";
import { motion } from "framer-motion";
const AnimatedCursor = () => {
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setmousePosition({
        x: e.clientX - 25,
        y: e.clientY - 25,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <motion.div className="cursor" variants={variants} animate="default" />
  );
};

export default AnimatedCursor;
