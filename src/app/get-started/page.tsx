"use client";

import React from "react";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  Button,
  alpha,
  useTheme,
  Stack,
} from "@mui/material";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function GetStartedPage() {
  const theme = useTheme();

  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedBackground />
      {/* <Header /> */}
      <Box
        component="section"
        sx={{
          pt: 20,
          pb: 10,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={6}
          >
            {/* Left Side: Content */}
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <Box
                  sx={{
                    p: { xs: 4, md: 8 },
                    borderRadius: "32px",
                    background: alpha(theme.palette.background.paper, 0.4),
                    backdropFilter: "blur(20px)",
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    boxShadow: `0 32px 64px -12px ${alpha(theme.palette.primary.main, 0.15)}`,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      mb: 2,
                      display: "block",
                    }}
                  >
                    Start Your Journey
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "2.5rem", md: "4rem" },
                      mb: 3,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Ready to Build Something Amazing?
                  </Typography>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 6, maxWidth: "600px", mx: { xs: "auto", md: 0 } }}
                  >
                    Let's collaborate to bring your vision to life. Whether you need
                    a new website, a custom application, or a digital transformation
                    strategy, we are here to help.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: { xs: "center", md: "flex-start" },
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      component={Link}
                      href="/contact"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 2,
                        px: 6,
                        fontSize: "1.1rem",
                        borderRadius: "16px",
                        background: theme.palette.gradient.primary,
                        boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                      }}
                    >
                      Contact Us Now
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component={Link}
                      href="/services"
                      sx={{
                        py: 2,
                        px: 6,
                        fontSize: "1.1rem",
                        borderRadius: "16px",
                        borderColor: alpha(theme.palette.text.primary, 0.2),
                        color: theme.palette.text.primary,
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          background: alpha(theme.palette.primary.main, 0.05),
                        },
                      }}
                    >
                      Explore Services
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            {/* Right Side: Image */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
                src="/charactor/single_thumbs_up.png"
                alt="Thumbs Up Character"
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
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
