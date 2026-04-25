"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  alpha,
  useTheme,
} from "@mui/material";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { Code, Brush, TrendingUp, Storage } from "@mui/icons-material";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "Building scalable, high-performance web applications using modern technologies like Next.js and React.",
    icon: <Code fontSize="large" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning interfaces that provide seamless user experiences.",
    icon: <Brush fontSize="large" />,
  },
  {
    title: "Digital Strategy",
    description:
      "Data-driven strategies to grow your digital presence and achieve business objectives.",
    icon: <TrendingUp fontSize="large" />,
  },
  {
    title: "Backend Solutions",
    description:
      "Robust server-side architecture and API development for complex systems.",
    icon: <Storage fontSize="large" />,
  },
];

export default function ServicesPage() {
  const theme = useTheme();

  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <Box component="section" sx={{ pt: 10, pb: 10, flex: 1 }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ mb: 6, textAlign: "left" }}>
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
                  Our Expertise
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
                  Services We Offer
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Comprehensive solutions tailored to your unique business
                  needs.
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {services.map((service, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ height: "100%" }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          height: "100%",
                          borderRadius: "24px",
                          background: alpha(
                            theme.palette.background.paper,
                            0.6,
                          ),
                          backdropFilter: "blur(10px)",
                          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
                            borderColor: theme.palette.primary.main,
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "16px",
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{ fontWeight: 700 }}
                        >
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {service.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                position: { xs: "relative", md: "sticky" },
                top: {
                  xs: 0,
                  md: "320px",
                },
                alignSelf: "flex-start",
                mt: { xs: 8, md: 0 },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image
                    src="/charactor/looking_at_a_tablet.png"
                    alt="Looking at a tablet"
                    width={1000}
                    height={1000}
                    style={{
                      width: "100%",
                      maxWidth: "700px",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    priority
                    unoptimized
                  />
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </main>
  );
}
