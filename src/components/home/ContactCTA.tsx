"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Stack,
  alpha,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export const ContactCTA = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={6}
        >
          {/* Left Side: Image */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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
              src="/charactor/idea.png"
              alt="Creative Idea Character"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Right Side: Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                Ready to Elevate Your Brand?
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mb: 5,
                  fontWeight: 400,
                  maxWidth: "600px",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Let's collaborate to build something extraordinary. Our team is
                ready to turn your vision into reality.
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/contact"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    padding: "16px 48px",
                    fontSize: "1.125rem",
                    borderRadius: "50px",
                  }}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="mailto:hello@example.com"
                  sx={{
                    padding: "16px 48px",
                    fontSize: "1.125rem",
                    borderRadius: "50px",
                  }}
                >
                  Email Us
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
