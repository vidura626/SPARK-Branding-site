"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  IconButton,
  Stack,
  useTheme,
  alpha,
  Typography,
} from "@mui/material";
import { SparkLogo } from "./ui/SparkLogo";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        position: "sticky",
        bottom: 0,
        zIndex:1000,
        bgcolor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          {/* Brand Logo */}
           <Box
            component={Link}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              width: "120px",
            }}
          >
            <SparkLogo />
           </Box>  

          {/* Tagline */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", flex: 1, px: { xs: 0, md: 4 } }}
          >
            Empowering brands with data-driven insights and world-class
            digital experiences.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={0.5}>
            {[
              <TwitterIcon key="twitter" fontSize="small" />,
              <LinkedInIcon key="linkedin" fontSize="small" />,
              <InstagramIcon key="instagram" fontSize="small" />,
              <GitHubIcon key="github" fontSize="small" />,
            ].map((icon, index) => (
              <IconButton
                key={index}
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>

          {/* Copyright */}
          <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
            © {new Date().getFullYear()} Brand Agency.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
