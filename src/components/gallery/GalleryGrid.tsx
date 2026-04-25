"use client";

import React from "react";
import Grid from "@mui/material/Grid";
import { GalleryItem } from "./GalleryItem";

const galleryItems = [
  {
    title: "Urban Architecture",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Neon Nights",
    category: "Digital Art",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Minimalist Geometry",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
  },
  {
    title: "Nature's Patterns",
    category: "Photography",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Abstract Fluids",
    category: "3D Render",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Tech Workspaces",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
  },
];

export const GalleryGrid = () => {
  return (
    <Grid container spacing={3}>
      {galleryItems.map((item, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
          <GalleryItem item={item} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};
