// src/theme/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { montserrat, inter } from "@/app/fonts";

// Modern professional color tokens
const colorTokens = {
  light: {
    primary: {
      main: "#4338ca", // Rich indigo
      light: "#6366f1",
      dark: "#3730a3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#06b6d4", // Cyan accent
      light: "#22d3ee",
      dark: "#0891b2",
      contrastText: "#ffffff",
    },
    accent: {
      purple: "#8b5cf6",
      emerald: "#10b981",
      amber: "#f59e0b",
    },
    neutral: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      900: "#18181b",
    },
    gradient: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      hero: "linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #8b5cf6 100%)",
      subtle: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    },
  },
  dark: {
    primary: {
      main: "#6366f1",
      light: "#818cf8",
      dark: "#4f46e5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#22d3ee",
      light: "#67e8f9",
      dark: "#06b6d4",
      contrastText: "#0f172a",
    },
    accent: {
      purple: "#a78bfa",
      emerald: "#34d399",
      amber: "#fbbf24",
    },
    neutral: {
      50: "#18181b",
      100: "#27272a",
      200: "#3f3f46",
      300: "#52525b",
      400: "#71717a",
      500: "#a1a1aa",
      600: "#d4d4d8",
      700: "#e4e4e7",
      900: "#fafafa",
    },
    gradient: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      hero: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
      subtle: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
    },
  },
};

export const getThemeOptions = (mode: "light" | "dark"): ThemeOptions => {
  const colors = colorTokens[mode];

  return {
    palette: {
      mode,
      primary: colors.primary,
      secondary: colors.secondary,
      neutral: colors.neutral,
      accent: colors.accent,
      gradient: colors.gradient,
      background: {
        default: mode === "light" ? colors.neutral[50] : "#0a0a0f",
        paper: mode === "light" ? "#ffffff" : colors.neutral[100],
      },
      text: {
        primary: mode === "light" ? colors.neutral[900] : colors.neutral[900],
        secondary: mode === "light" ? colors.neutral[500] : colors.neutral[500],
      },
      divider: mode === "light" ? colors.neutral[200] : colors.neutral[200],
      success: {
        main: colors.accent.emerald,
        light: mode === "light" ? "#6ee7b7" : "#6ee7b7",
        dark: mode === "light" ? "#059669" : "#047857",
      },
      warning: {
        main: colors.accent.amber,
      },
      error: {
        main: "#ef4444",
        light: "#f87171",
        dark: "#dc2626",
      },
      info: {
        main: colors.secondary.main,
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
      h1: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: "-0.03em",
      },
      h2: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h3: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      h4: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontFamily: montserrat.style.fontFamily,
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      subtitle1: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: "0.005em",
      },
      subtitle2: {
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.6,
      },
      body1: {
        fontSize: "1.0625rem",
        lineHeight: 1.7,
        letterSpacing: "0.0025em",
        color: mode === "light" ? colors.neutral[700] : colors.neutral[300],
      },
      body2: {
        fontSize: "0.9375rem",
        lineHeight: 1.6,
        color: mode === "light" ? colors.neutral[600] : colors.neutral[400],
      },
      button: {
        fontSize: "0.9375rem",
        fontWeight: 600,
        letterSpacing: "0.025em",
        textTransform: "none",
      },
      caption: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.5,
        color: mode === "light" ? colors.neutral[500] : colors.neutral[500],
      },
    },
    spacing: 8,
    shape: {
      borderRadius: 10,
    },
    shadows: [
      "none",
      "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      "0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
      "0px 4px 8px 0px rgba(67, 56, 202, 0.08), 0px 2px 4px 0px rgba(67, 56, 202, 0.05)",
      "0px 8px 16px 0px rgba(67, 56, 202, 0.10), 0px 4px 6px 0px rgba(67, 56, 202, 0.06)",
      "0px 12px 24px 0px rgba(67, 56, 202, 0.12), 0px 6px 12px 0px rgba(67, 56, 202, 0.08)",
      "0px 16px 32px 0px rgba(67, 56, 202, 0.14), 0px 8px 16px 0px rgba(67, 56, 202, 0.10)",
      "0px 24px 48px 0px rgba(67, 56, 202, 0.18), 0px 12px 24px 0px rgba(67, 56, 202, 0.12)",
      "0px 32px 64px 0px rgba(67, 56, 202, 0.20), 0px 16px 32px 0px rgba(67, 56, 202, 0.14)",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background:
                mode === "light" ? colors.neutral[100] : colors.neutral[100],
            },
            "&::-webkit-scrollbar-thumb": {
              background:
                mode === "light" ? colors.neutral[300] : colors.neutral[300],
              borderRadius: "4px",
              "&:hover": {
                background:
                  mode === "light" ? colors.neutral[400] : colors.neutral[400],
              },
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: false,
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: "none",
            fontWeight: 600,
            padding: "11px 28px",
            fontSize: "0.9375rem",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(255, 255, 255, 0.1)",
              transform: "translateX(-100%)",
              transition: "transform 0.3s ease",
            },
            "&:hover::before": {
              transform: "translateX(0)",
            },
          },
          contained: {
            boxShadow: "0px 4px 12px 0px rgba(67, 56, 202, 0.20)",
            "&:hover": {
              boxShadow: "0px 8px 20px 0px rgba(67, 56, 202, 0.28)",
              transform: "translateY(-1px)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
          },
          containedPrimary: {
            background: colors.gradient.primary,
            "&:hover": {
              background: colors.gradient.primary,
              filter: "brightness(1.1)",
            },
          },
          outlined: {
            borderWidth: "1.5px",
            "&:hover": {
              borderWidth: "1.5px",
              backgroundColor:
                mode === "light"
                  ? "rgba(67, 56, 202, 0.04)"
                  : "rgba(99, 102, 241, 0.08)",
            },
          },
          sizeLarge: {
            padding: "14px 36px",
            fontSize: "1rem",
            borderRadius: 12,
          },
          sizeSmall: {
            padding: "8px 20px",
            fontSize: "0.875rem",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: `1px solid ${
              mode === "light" ? colors.neutral[200] : colors.neutral[200]
            }`,
            boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.04)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            backdropFilter: "blur(8px)",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0px 16px 32px 0px rgba(67, 56, 202, 0.12)",
              borderColor:
                mode === "light" ? colors.primary.light : colors.primary.main,
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: "24px",
            "&:last-child": {
              paddingBottom: "24px",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(12px) saturate(180%)",
            backgroundColor:
              mode === "light"
                ? "rgba(255, 255, 255, 0.80)"
                : "rgba(15, 23, 42, 0.80)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "0.8125rem",
            height: "28px",
          },
          filled: {
            backgroundColor:
              mode === "light" ? colors.neutral[100] : colors.neutral[200],
            color: mode === "light" ? colors.neutral[700] : colors.neutral[700],
            "&:hover": {
              backgroundColor:
                mode === "light" ? colors.neutral[200] : colors.neutral[300],
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 10,
              transition: "all 0.2s ease",
              "&:hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor:
                    mode === "light"
                      ? colors.primary.light
                      : colors.primary.main,
                },
              },
              "&.Mui-focused": {
                boxShadow: `0 0 0 3px ${
                  mode === "light"
                    ? "rgba(67, 56, 202, 0.08)"
                    : "rgba(99, 102, 241, 0.12)"
                }`,
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
          rounded: {
            borderRadius: 16,
          },
          elevation1: {
            boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.04)",
            border: `1px solid ${
              mode === "light" ? colors.neutral[200] : colors.neutral[200]
            }`,
          },
          elevation2: {
            boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.06)",
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            "@media (min-width:1200px)": {
              maxWidth: "1280px",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor:
                mode === "light"
                  ? "rgba(67, 56, 202, 0.06)"
                  : "rgba(99, 102, 241, 0.08)",
              transform: "scale(1.05)",
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            position: "relative",
            transition: "color 0.2s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "1px",
              bottom: 0,
              left: 0,
              backgroundColor: "currentColor",
              transform: "scaleX(0)",
              transformOrigin: "right",
              transition: "transform 0.2s ease",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
              transformOrigin: "left",
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor:
              mode === "light" ? colors.neutral[200] : colors.neutral[200],
          },
        },
      },
    },
  };
};


// Export theme creator
export const createAppTheme = (mode: "light" | "dark") =>
  createTheme(getThemeOptions(mode));

// Export color tokens for custom usage
export { colorTokens };

// Module augmentation for custom theme colors
declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      500: string;
      700: string;
      900: string;
    };
    accent: {
      purple: string;
      emerald: string;
      amber: string;
    };
    gradient: {
      primary: string;
      hero: string;
      subtle: string;
    };
  }
  interface PaletteOptions {
    neutral?: {
      50: string;
      100: string;
      200: string;
      300: string;
      500: string;
      700: string;
      900: string;
    };
    accent?: {
      purple: string;
      emerald: string;
      amber: string;
    };
    gradient?: {
      primary: string;
      hero: string;
      subtle: string;
    };
  }
}
