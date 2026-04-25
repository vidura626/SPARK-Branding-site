"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  TextField,
  Button,
  Typography,
  alpha,
  useTheme,
  CircularProgress,
  Alert,
  Snackbar,
  Paper,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(5, { message: "Please provide more detail in the subject" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setShowSuccess(true);
    reset();
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      transition: "all 0.3s ease",
      backgroundColor: alpha(theme.palette.background.paper, 0.5),
      backdropFilter: "blur(12px)",
      "&:hover": {
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.light,
        },
      },
      "&.Mui-focused": {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },
      },
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary,
      "&.Mui-focused": {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
    },
  };

  return (
    <Box>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 700,
            letterSpacing: "0.1em",
            display: "block",
            mb: 1,
          }}
        >
          Get in Touch
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Send us a Message
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ width: "100%" }}
            >
              <TextField
                fullWidth
                label="Full Name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                variant="outlined"
                sx={inputStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ width: "100%" }}
            >
              <TextField
                fullWidth
                label="Email Address"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                variant="outlined"
                sx={inputStyles}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TextField
              fullWidth
              label="Subject"
              {...register("subject")}
              error={!!errors.subject}
              helperText={errors.subject?.message}
              variant="outlined"
              sx={inputStyles}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SubjectIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TextField
              fullWidth
              label="How can we help?"
              multiline
              rows={4}
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
              variant="outlined"
              sx={inputStyles}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
              endIcon={
                isSubmitting ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              sx={{
                py: 2,
                fontSize: "1rem",
                fontWeight: 700,
                borderRadius: "12px",
                background: theme.palette.gradient.primary,
                boxShadow: `0 8px 16px -4px ${alpha(theme.palette.primary.main, 0.4)}`,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 12px 24px -4px ${alpha(theme.palette.primary.main, 0.6)}`,
                  filter: "brightness(1.1)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </Box>
      </form>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setShowSuccess(false)}
          sx={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: theme.shadows[4],
          }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
