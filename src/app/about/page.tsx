"use client";

import React from "react";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  Stack,
  alpha,
  useTheme,
} from "@mui/material";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

export default function AboutPage() {
  const theme = useTheme();

  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedBackground />
      {/* <Header /> */}
      <Box component="section" sx={{ pt: 20, pb: 10, flex: 1, display: "flex", alignItems: "center" }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={8}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "600px" } }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    mb: 1,
                    display: "block",
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  We Craft Digital Experiences
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  paragraph
                  sx={{ mt: 3, lineHeight: 1.6 }}
                >
                  We are a team of visionaries, developers, and designers
                  committed to transforming ideas into impactful digital
                  realities.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Founded on the principles of innovation and excellence, we
                  specialize in building scalable web applications, stunning
                  user interfaces, and robust backend systems. Our journey began
                  with a simple mission: to make the web a more beautiful and
                  functional place.
                </Typography>
              </motion.div>
            </Box>

            {/* Right Image */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: { xs: "100%", md: "500px" },
              }}
            >
              <Image
                src="/charactor/with_laptop.png"
                alt="Character with laptop"
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "500px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </main>
  );
}
