// components/AnimatedBackground.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) {
    return null;
  }

  const isLight = theme.palette.mode === "light";
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const accentColor = theme.palette.accent.purple;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
        background: isLight
          ? `linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)`
          : `linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)`, // Deep navy/purple for dark mode
        transition: "background 0.5s ease",
      }}
    >
      {/* Wave 1 - Primary */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "200%",
          height: "100%",
          bottom: 0,
          left: 0,
          opacity: isLight ? 0.08 : 0.15,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 0 }}
        >
          <path
            fill={primaryColor}
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* Wave 2 - Secondary */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "200%",
          height: "100%",
          bottom: 0,
          left: 0,
          opacity: isLight ? 0.08 : 0.1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 0 }}
        >
          <path
            fill={secondaryColor}
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* Wave 3 - Accent */}
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "200%",
          height: "100%",
          bottom: 0,
          left: 0,
          opacity: isLight ? 0.05 : 0.08,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 0 }}
        >
          <path
            fill={accentColor} // Purple accent from theme
            fillOpacity="1"
            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,197.3C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      {/* Floating Geometric Shapes (Subtle) */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -30, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          width: 60,
          height: 60,
          background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
          opacity: isLight ? 0.05 : 0.1,
          borderRadius: "8px",
          top: "15%",
          left: "10%",
        }}
      />
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "absolute",
          width: 40,
          height: 40,
          background: `linear-gradient(135deg, ${secondaryColor}, ${theme.palette.secondary.light})`,
          opacity: isLight ? 0.06 : 0.12,
          borderRadius: "50%",
          top: "65%",
          right: "15%",
        }}
      />
    </Box>
  );
}
