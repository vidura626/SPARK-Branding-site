"use client";

import React from "react";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Industry Awards" },
  { value: "50+", label: "Team Experts" },
];

export const Stats = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background:
          theme.palette.mode === "light"
            ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
            : `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.background.paper} 100%)`,
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Abstract Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
      />

      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {stats.map((stat, index) => (
            <Grid
              size={{ xs: 6, md: 3 }}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    textShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    opacity: 0.9,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
