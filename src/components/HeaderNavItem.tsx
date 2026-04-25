// components/HeaderNavItem.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, alpha, useTheme } from "@mui/material";

interface HeaderNavItemProps {
  label: string;
  href: string;
}

export function HeaderNavItem({ label, href }: HeaderNavItemProps) {
  const pathname = usePathname();
  const theme = useTheme();
  const isActive = pathname === href;

  return (
    <Button
      component={Link}
      href={href}
      sx={{
        color: isActive ? "primary.main" : "text.primary",
        px: 2,
        py: 1,
        fontSize: "0.9375rem",
        fontWeight: isActive ? 600 : 500,
        textTransform: "none",
        borderRadius: "8px",
        position: "relative",
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        bgcolor: isActive
          ? alpha(theme.palette.primary.main, 0.1)
          : "transparent",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 6,
          left: "50%",
          width: isActive ? "60%" : "0%",
          height: "2px",
          bgcolor: "primary.main",
          borderRadius: "2px",
          transform: "translateX(-50%)",
          transition: "width 0.3s ease",
        },
        "&:hover": {
          bgcolor: alpha(theme.palette.primary.main, 0.08),
          color: "primary.main",
          "&::before": {
            width: "60%",
          },
        },
        "&:active": {
          transform: "scale(0.97)",
        },
      }}
    >
      {label}
    </Button>
  );
}
