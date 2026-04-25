"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  BarChart,
  Brush,
  Code,
  TrendingUp,
  Storage,
  Devices,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business Analytics",
    description:
      "Data-driven insights to unlock new growth opportunities and optimize performance.",
    icon: <BarChart fontSize="large" />,
  },
  {
    title: "Brand Strategy",
    description:
      "Crafting compelling narratives and visual identities that resonate with your audience.",
    icon: <TrendingUp fontSize="large" />,
  },
  {
    title: "Web Development",
    description:
      "Building robust, scalable, and high-performance web applications using modern tech stacks.",
    icon: <Code fontSize="large" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and aesthetically pleasing interfaces that enhance user engagement.",
    icon: <Brush fontSize="large" />,
  },
  {
    title: "Data Engineering",
    description:
      "Designing reliable data pipelines and infrastructure for actionable intelligence.",
    icon: <Storage fontSize="large" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic campaigns to increase visibility and drive conversion across channels.",
    icon: <Devices fontSize="large" />,
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "visible",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease",
          },
          "&:hover": {
            "&::before": {
              transform: "scaleX(1)",
            },
            "& .icon-box": {
              transform: "scale(1.1) rotate(5deg)",
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
            },
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            className="icon-box"
            sx={{
              display: "inline-flex",
              p: 2,
              borderRadius: "16px",
              bgcolor: alpha(theme.palette.divider, 0.05),
              color: theme.palette.text.secondary,
              mb: 3,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {service.icon}
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            component="h3"
            sx={{ fontWeight: 700 }}
          >
            {service.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Services = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 16 },
        bgcolor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 8, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
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
              Our Expertise
            </Typography>
            <Typography variant="h2" gutterBottom>
              Comprehensive Digital Solutions
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mt: 2, fontWeight: 400 }}
            >
              We blend creative strategy with technical excellence to deliver
              results.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
              <ServiceCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
