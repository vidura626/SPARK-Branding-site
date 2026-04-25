import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AnimatedBackground />
      {/* <Header /> */}
      <Box component="section" sx={{ pt: 20, pb: 10, flex: 1 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Creative Gallery
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: "600px", mx: "auto" }}
            >
              A visual collection of our finest moments, projects, and
              inspirations.
            </Typography>
          </Box>
          <GalleryGrid />
        </Container>
      </Box>
      <Footer />
    </main>
  );
}
