"use client";

import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";

interface GalleryItemProps {
  item: {
    title: string;
    category: string;
    image: string;
  };
  index: number;
}

export const GalleryItem = ({ item, index }: GalleryItemProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
            "& .gallery-image": {
              transform: "scale(1.08)",
            },
            "& .gallery-overlay": {
              opacity: 1,
            },
          },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <CardActionArea sx={{ height: "300px" }}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              className="gallery-image"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease",
              }}
            />
            <Box
              className="gallery-overlay"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(to top, ${alpha(
                  theme.palette.common.black,
                  0.7,
                )} 0%, transparent 100%)`,
                opacity: 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 3,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.secondary.light,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {item.category}
              </Typography>
              <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                {item.title}
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </motion.div>
  );
};
