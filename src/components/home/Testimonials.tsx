"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow",
    content:
      "The team delivered beyond our expectations. Their technical expertise and attention to detail resulted in a platform that truly stands out in our market.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateX",
    content:
      "Working with them was a game-changer for our startup. They understood our vision perfectly and executed it with precision and speed.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GlobalCorp",
    content:
      "Exceptional design skills combined with robust development. The new website has significantly increased our conversion rates.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
];

export const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decor */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "100%",
          background:
            theme.palette.mode === "light"
              ? `radial-gradient(circle at center, ${alpha(theme.palette.secondary.light, 0.05)} 0%, transparent 70%)`
              : `radial-gradient(circle at center, ${alpha(theme.palette.secondary.dark, 0.1)} 0%, transparent 70%)`,
          zIndex: -1,
        }}
      />

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
              Client Success
            </Typography>
            <Typography variant="h2" gutterBottom>
              Stories of Impact
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 2 }}>
              Don't just take our word for it—hear from the innovative companies
              we've partnered with.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ height: "100%" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "24px",
                    background:
                      theme.palette.mode === "light"
                        ? alpha(theme.palette.background.paper, 0.8)
                        : alpha(theme.palette.background.paper, 0.4),
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.08)}`,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 40,
                        color: theme.palette.secondary.main,
                        opacity: 0.5,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      flex: 1,
                      mb: 4,
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      color: theme.palette.text.secondary,
                    }}
                  >
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, lineHeight: 1.2 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                      <Box sx={{ display: "flex", mt: 0.5 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Rating
                            key={i}
                            value={1}
                            max={1}
                            readOnly
                            size="small"
                            sx={{
                              color: theme.palette.warning.main,
                              fontSize: "0.875rem",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
