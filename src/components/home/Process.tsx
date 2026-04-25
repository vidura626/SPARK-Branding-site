"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { Search, Lightbulb, Build, RocketLaunch } from "@mui/icons-material";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your brand to understand your goals, audience, and challenges.",
    icon: <Search fontSize="large" />,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a roadmap that aligns creative vision with measurable business objectives.",
    icon: <Lightbulb fontSize="large" />,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our expert team brings the concept to life through rigorous design and development.",
    icon: <Build fontSize="large" />,
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We deploy with confidence and continuously optimize for sustained success.",
    icon: <RocketLaunch fontSize="large" />,
  },
];

export const Process = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{ mb: 10, textAlign: "center", maxWidth: "800px", mx: "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
              How We Work
            </Typography>
            <Typography variant="h2" gutterBottom>
              From Concept to Reality
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: 2, fontWeight: 400 }}
            >
              A transparent, agile process designed to deliver exceptional
              results.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    background:
                      theme.palette.mode === "light"
                        ? alpha(theme.palette.neutral[50], 0.6)
                        : alpha(theme.palette.neutral[900], 0.6),
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "24px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 30px ${alpha(
                        theme.palette.primary.main,
                        0.1,
                      )}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mb: 3,
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: "4rem !important",
                        fontWeight: 900,
                        color: alpha(theme.palette.primary.main, 0.1),
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </Typography>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: "12px",
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      }}
                    >
                      {step.icon}
                    </Box>
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
