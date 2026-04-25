"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useTheme,
  useScrollTrigger,
  Fade,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DarkMode, LightMode } from "@mui/icons-material";
import { HeaderNavItem } from "./HeaderNavItem";
import { useColorMode } from "./ThemeRegistry";
import { SparkLogo } from "./ui/SparkLogo";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  // Scroll trigger for glassmorphism effect
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.72)"
              : "rgba(15, 23, 42, 0.72)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
            : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled
            ? `0 4px 24px ${alpha(theme.palette.primary.main, 0.08)}`
            : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: { xs: "50px", md: "40px" },
              transition: "min-height 0.3s ease",
            }}
          >
            {/* Logo with Animation */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  width: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  transition: "width 0.3s ease",
                  borderRadius: "2px",
                },
                "&:hover::before": {
                  width: "100%",
                },
              }}
            >
              {/* Logo with Animation  */}
              <Box
                component={Link}
                href="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  width: { xs: "100px", md: "150px" },
                  transition:
                    "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <SparkLogo />
              </Box>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  ml: 0.5,
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  "@keyframes pulse": {
                    "0%, 100%": {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                    "50%": {
                      opacity: 0.5,
                      transform: "scale(1.2)",
                    },
                  },
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* Nav Items with Enhanced Styling */}
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  gap: 0.5,
                  bgcolor: alpha(theme.palette.background.paper, 0.4),
                  borderRadius: "12px",
                  p: 0.5,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  backdropFilter: "blur(8px)",
                }}
              >
                {navItems.map((item) => (
                  <HeaderNavItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                  />
                ))}
              </Box>

              {/* CTA Button with Gradient & Icon */}
              <Button
                variant="contained"
                component={Link}
                href="/get-started"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      transition: "transform 0.3s ease",
                      ".MuiButton-root:hover &": {
                        transform: "translateX(4px)",
                      },
                    }}
                  />
                }
                sx={{
                  ml: 1,
                  position: "relative",
                  overflow: "hidden",
                  background:
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  px: 3,
                  py: 1.25,
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "10px",
                  boxShadow: `0 4px 14px ${alpha(
                    theme.palette.primary.main,
                    0.3,
                  )}`,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    transition: "left 0.5s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 20px ${alpha(
                      theme.palette.primary.main,
                      0.4,
                    )}`,
                    "&::before": {
                      left: "100%",
                    },
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile Menu & Theme Toggle */}
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
              <IconButton
                onClick={toggleColorMode}
                sx={{
                  border: `1.5px solid ${alpha(theme.palette.divider, 0.2)}`,
                  bgcolor: alpha(theme.palette.background.paper, 0.4),
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    transform: "rotate(180deg)",
                  },
                }}
              >
                {theme.palette.mode === "dark" ? (
                  <LightMode sx={{ fontSize: 20 }} />
                ) : (
                  <DarkMode sx={{ fontSize: 20 }} />
                )}
              </IconButton>

              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  border: `1.5px solid ${alpha(theme.palette.divider, 0.2)}`,
                  bgcolor: alpha(theme.palette.background.paper, 0.4),
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer for fixed header */}
      <Toolbar sx={{ minHeight: { xs: "64px", md: "72px" } }} />

      {/* Enhanced Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 320,
            background:
              theme.palette.mode === "light"
                ? "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
                : "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
            backdropFilter: "blur(20px)",
            borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          },
        }}
      >
        <Fade in={mobileOpen} timeout={300}>
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {/* Mobile Header */}
            <Box
              sx={{
                p: 3,
                borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BRAND
                </Typography>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    ml: 0.5,
                  }}
                />
              </Box>
            </Box>

            {/* Mobile Navigation */}
            <List sx={{ px: 2, py: 3, flex: 1 }}>
              {navItems.map((item, index) => (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{
                    mb: 1.5,
                    animation: `slideIn 0.3s ease ${index * 0.1}s both`,
                    "@keyframes slideIn": {
                      from: {
                        opacity: 0,
                        transform: "translateX(20px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                  }}
                >
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={handleDrawerToggle}
                    sx={{
                      borderRadius: "12px",
                      py: 1.5,
                      px: 2.5,
                      transition: "all 0.2s ease",
                      bgcolor: alpha(theme.palette.background.paper, 0.5),
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      "&:hover": {
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                        borderColor: theme.palette.primary.main,
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    />
                    <ArrowForwardIcon
                      sx={{
                        fontSize: 18,
                        opacity: 0.5,
                        transition: "opacity 0.2s ease",
                        ".MuiListItemButton-root:hover &": {
                          opacity: 1,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            {/* Mobile CTA */}
            <Box sx={{ p: 3, pt: 0 }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                component={Link}
                href="/get-started"
                onClick={handleDrawerToggle}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  py: 1.75,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background:
                    theme.palette.mode === "light"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  boxShadow: `0 8px 24px ${alpha(
                    theme.palette.primary.main,
                    0.3,
                  )}`,
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 12px 32px ${alpha(
                      theme.palette.primary.main,
                      0.4,
                    )}`,
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Fade>
      </Drawer>
    </>
  );
}
