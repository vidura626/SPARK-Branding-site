"use client";

import React from "react";
import { Box, Container, Typography, useTheme, alpha } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const brands = [
  {
    name: "TechFlow",
    logo: "https://via.placeholder.com/150x50?text=TechFlow",
  },
  {
    name: "GlobalCorp",
    logo: "https://via.placeholder.com/150x50?text=GlobalCorp",
  },
  {
    name: "InnovateX",
    logo: "https://via.placeholder.com/150x50?text=InnovateX",
  },
  {
    name: "FutureScale",
    logo: "https://via.placeholder.com/150x50?text=FutureScale",
  },
  {
    name: "DataDrive",
    logo: "https://via.placeholder.com/150x50?text=DataDrive",
  },
  {
    name: "SmartSys",
    logo: "https://via.placeholder.com/150x50?text=SmartSys",
  },
];

export const TrustedBy = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background:
          theme.palette.mode === "light"
            ? "radial-gradient(ellipse at center, #ffffff 0%, #f8fafc 100%)"
            : "radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)",
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Trusted by industry leaders
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {brands.map((brand, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={brand.name}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Box
                  sx={{
                    opacity: 0.5,
                    filter:
                      theme.palette.mode === "light"
                        ? "grayscale(100%)"
                        : "grayscale(100%) brightness(1.5)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                      filter: "grayscale(0%)",
                      transform: "scale(1.05)",
                    },
                    cursor: "pointer",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* Using text for placeholder as actual SVGs/images would require assets. 
                      In a real scenario, this would be an <img src={brand.logo} /> or SVG component. */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      fontSize: "1.25rem",
                    }}
                  >
                    {brand.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
