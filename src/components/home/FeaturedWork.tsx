"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  useTheme,
  alpha,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description:
      "Real-time financial data visualization for enterprise banking clients.",
  },
  {
    title: "EcoBrand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    description:
      "Complete visual identity and brand strategy for a sustainable fashion label.",
  },
  {
    title: "HealthCore App",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2028&auto=format&fit=crop",
    description:
      "HIPAA-compliant telemedicine platform connecting patients with specialists.",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: "24px",
          overflow: "hidden",
          position: "relative",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
            "& .project-image": {
              transform: "scale(1.05)",
            },
            "& .overlay": {
              opacity: 1,
            },
          },
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <CardActionArea sx={{ height: "100%" }}>
          <Box
            sx={{
              position: "relative",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              className="project-image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease",
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(to top, ${alpha(
                  theme.palette.common.black,
                  0.8,
                )} 0%, transparent 100%)`,
                opacity: 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 3,
              }}
            >
              <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
                View Case Study
              </Typography>
            </Box>
          </Box>
          <CardContent sx={{ p: 4 }}>
            <Chip
              label={project.category}
              size="small"
              sx={{
                mb: 2,
                borderRadius: "8px",
                fontWeight: 600,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
              }}
            />
            <Typography variant="h4" gutterBottom sx={{ fontSize: "1.5rem" }}>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};

export const FeaturedWork = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 16 },
        bgcolor:
          theme.palette.mode === "light"
            ? theme.palette.neutral[50]
            : theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 8,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box maxWidth="600px">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                Selected Work
              </Typography>
              <Typography variant="h2" gutterBottom>
                Showcase of Excellence
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              component={Link}
              href="/gallery"
              endIcon={<ArrowForwardIcon />}
              size="large"
              sx={{ fontWeight: 600 }}
            >
              View All Projects
            </Button>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
