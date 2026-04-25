"use client";

import React from "react";
import { fetchAndProcessContactDetails } from "@/services/contactService";
import type { ContactDetails } from "@/services/types/contact";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  alpha,
  useTheme,
  Stack,
  IconButton,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import { motion, type Variants } from "framer-motion";
import EmailIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/PhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import ContactForm from "./ContactForm";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export default function ContactPage() {
  const [contactDetails, setContactDetails] = React.useState<ContactDetails[]>(
    [],
  );
  const [loading, setLoading] = React.useState(true);
  const theme = useTheme();

  React.useEffect(() => {
    async function loadContacts() {
      try {
        const details = await fetchAndProcessContactDetails();
        setContactDetails(details);
      } catch (err) {
        console.error("Failed to load contacts", err);
      } finally {
        setLoading(false);
      }
    }
    loadContacts();
  }, []);

  const glassStyle = {
    bgcolor: alpha(theme.palette.background.paper, 0.6),
    backdropFilter: "blur(20px)",
    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
    boxShadow: theme.shadows[2],
    borderRadius: 6,
    overflow: "hidden",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: theme.shadows[8],
      borderColor: alpha(theme.palette.primary.main, 0.2),
      transform: "translateY(-4px)",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        background:
          theme.palette.mode === "light"
            ? `radial-gradient(circle at 10% 20%, ${alpha(
                theme.palette.primary.light,
                0.15,
              )} 0%, transparent 40%),
               radial-gradient(circle at 90% 80%, ${alpha(
                 theme.palette.secondary.light,
                 0.15,
               )} 0%, transparent 40%)`
            : `radial-gradient(circle at 10% 20%, ${alpha(
                theme.palette.primary.dark,
                0.3,
              )} 0%, transparent 50%),
               radial-gradient(circle at 90% 80%, ${alpha(
                 theme.palette.secondary.dark,
                 0.2,
               )} 0%, transparent 50%)`,
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* Left Column: Header & Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Box sx={{ mb: 6 }}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="overline"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      color: theme.palette.primary.main,
                      display: "block",
                      mb: 2,
                    }}
                  >
                    Get in Touch
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${alpha(
                        theme.palette.text.primary,
                        0.7,
                      )} 100%)`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Let's Build Something
                    <br />
                    Amazing Together.
                  </Typography>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.secondary",
                      maxWidth: 480,
                      lineHeight: 1.6,
                    }}
                  >
                    Have a project in mind? We'd love to hear about it. Reach
                    out via email, phone, or send us a message directly.
                  </Typography>
                </motion.div>
              </Box>

              <motion.div variants={itemVariants}>
                <Stack spacing={3}>
                  {loading ? (
                    <Paper sx={{ p: 4, ...glassStyle }}>
                      <Typography color="text.secondary">
                        Loading contact details...
                      </Typography>
                    </Paper>
                  ) : (
                    <>
                      {/* Fallback to demo data if no API data is present */}
                      {(contactDetails.length === 0
                        ? [
                            {
                              id: "demo",
                              email: ["hello@brand.com"],
                              mobile: ["+1 (555) 123-4567"],
                              socialMedia: [],
                            },
                          ]
                        : contactDetails
                      ).map((contact) => (
                        <Box
                          key={contact.id}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                          }}
                        >
                          {/* Contact Cards */}
                          {contact.email.map((email) => (
                            <Paper
                              key={email}
                              component="a"
                              href={`mailto:${email}`}
                              sx={{
                                ...glassStyle,
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  bgcolor: alpha(
                                    theme.palette.primary.main,
                                    0.1,
                                  ),
                                  color: theme.palette.primary.main,
                                }}
                              >
                                <EmailIcon fontSize="medium" />
                              </Box>
                              <Box>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  fontWeight={600}
                                  display="block"
                                  mb={0.5}
                                >
                                  EMAIL US
                                </Typography>
                                <Typography variant="h6" fontWeight={700}>
                                  {email}
                                </Typography>
                              </Box>
                              <ArrowForwardIcon
                                sx={{ ml: "auto", opacity: 0.5 }}
                              />
                            </Paper>
                          ))}

                          {contact.mobile.map((phone) => (
                            <Paper
                              key={phone}
                              component="a"
                              href={`tel:${phone.replace(/\s+/g, "")}`}
                              sx={{
                                ...glassStyle,
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 56,
                                  height: 56,
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  bgcolor: alpha(
                                    theme.palette.secondary.main,
                                    0.1,
                                  ),
                                  color: theme.palette.secondary.main,
                                }}
                              >
                                <PhoneIcon fontSize="medium" />
                              </Box>
                              <Box>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                  fontWeight={600}
                                  display="block"
                                  mb={0.5}
                                >
                                  CALL US
                                </Typography>
                                <Typography variant="h6" fontWeight={700}>
                                  {phone}
                                </Typography>
                              </Box>
                              <ArrowForwardIcon
                                sx={{ ml: "auto", opacity: 0.5 }}
                              />
                            </Paper>
                          ))}

                          {/* Quick Chat - WhatsApp Only */}
                          <Divider sx={{ my: 2 }}>
                            <Typography
                              variant="overline"
                              color="text.disabled"
                            >
                              QUICK CHAT
                            </Typography>
                          </Divider>

                          <Button
                            component="a"
                            href={`https://wa.me/${
                              contact.mobile[0]
                                ? contact.mobile[0].replace(/\D/g, "")
                                : "15551234567"
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                            fullWidth
                            startIcon={<WhatsAppIcon />}
                            sx={{
                              py: 2,
                              bgcolor: "#25D366",
                              color: "#fff",
                              borderRadius: 4,
                              fontSize: "1.1rem",
                              fontWeight: 700,
                              boxShadow: `0 8px 24px ${alpha("#25D366", 0.4)}`,
                              "&:hover": {
                                bgcolor: "#1fb855",
                                transform: "translateY(-2px)",
                                boxShadow: `0 12px 32px ${alpha("#25D366", 0.5)}`,
                              },
                              transition:
                                "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            Chat on WhatsApp
                          </Button>
                        </Box>
                      ))}
                    </>
                  )}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Column: Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  bgcolor: alpha(theme.palette.background.paper, 0.4),
                  backdropFilter: "blur(40px)",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  borderRadius: 8,
                  boxShadow: `0 40px 100px -20px ${alpha(theme.palette.common.black, 0.1)}`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative gradients */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <ContactForm />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
