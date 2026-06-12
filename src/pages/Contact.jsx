import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import {
  Call,
  Email,
  LocationOn,
  SendRounded,
} from "@mui/icons-material";

function Contact() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",

        display: "flex",
        alignItems: "center",

        py: { xs: 8, md: 0 },

        backgroundImage:
          "url('/MNd7xEbNWvIbvw0Tnx9mqIXTwpKTsfqKIzRA4rQ95oE6YmPnVrUvQQbXGA4RI7pYrJ0ImEfhHm-lM0rwrn25vznw6Sap8jVVX9uXOgfxZKeJXCw7ZAXcEyAd0yvv_fdOOOy1r1sMLR8_XoOqBWd7LicxaJvSRI-3QUxd8WXdmZVYRnO0uFMfVryWJqJqQYeN.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(7,15,35,0.35),rgba(7,15,35,0.25))",
        }}
      />

      {/* Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.22)",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(96,165,250,0.18)",
          filter: "blur(120px)",
        }}
      />

      {/* Main Content */}
      <Grid
        container
        spacing={{ xs: 6, md: 15 }}
        sx={{
          position: "relative",
          zIndex: 2,

          alignItems: "center",
          justifyContent: "center",

          width: "100%",

          px: {
            xs: 2,
            sm: 4,
            md: 6,
          },
        }}
      >
        {/* Left */}
        <Grid item xs={12} md={5}>
          <Box>
            <Typography
              sx={{
                color: "#2563eb",
                letterSpacing: "3px",
                fontWeight: "bold",
                mb: 2,
                mt:3,

                fontSize: {
                  xs: "18px",
                  sm: "24px",
                  md: "40px",
                },
              }}
            >
              CONTACT US
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                lineHeight: 1.2,
                mb: 3,

                fontSize: {
                  xs: "32px",
                  sm: "42px",
                  md: "50px",
                },
              }}
            >
              Let’s Build
              <br />
              Your Perfect Smile
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: "28px",
                mb: 5,
                maxWidth: "450px",

                fontSize: {
                  xs: "14px",
                  md: "16px",
                },
              }}
            >
              Our dental specialists are here to help
              you with appointments, smile makeovers,
              cleaning and advanced dental care.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={iconBox}>
                  <Call sx={{ color: "#2563eb" }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Phone
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.72)",
                    }}
                  >
                    +91 98765 43210
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={iconBox}>
                  <Email sx={{ color: "#2563eb" }} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.72)",
                    }}
                  >
                    dentora@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={iconBox}>
                  <LocationOn
                    sx={{ color: "#2563eb" }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Location
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.72)",
                    }}
                  >
                    Madurai, Tamil Nadu
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              borderRadius: "30px",

              p: {
                xs: 3,
                sm: 4,
                md: 4,
              },

              width: "100%",

              maxWidth: {
                xs: "81%",
                md: "520px",
              },

              background:
                "rgba(9, 50, 251, 0.08)",

              backdropFilter:
                "blur(18px)",

              border:
                "1px solid rgba(255,255,255,0.15)",

              boxShadow:
                "0 20px 50px rgba(0,0,0,0.22)",

              mt: {
                xs: 0,
                md: 6,
              },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "bold",
                mb: 1,

                fontSize: {
                  xs: "24px",
                  sm: "32px",
                  md: "40px",
                },
              }}
            >
              Send Message
            </Typography>

            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.72)",
                mb: 4,
              }}
            >
              Fill details and we will contact
              you soon.
            </Typography>

            <Box
              component="form"
              action="https://formsubmit.co/abinayaabi45668@gmail.com"
              method="POST"
            >
              <TextField
                fullWidth
                label="Name"
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Phone"
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Email"
                sx={inputStyle}
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                sx={inputStyle}
              />

              <Button
                type="submit"
                endIcon={<SendRounded />}
                sx={{
                  width: "100%",
                  py: 1.8,

                  borderRadius: "14px",

                  fontWeight: "bold",

                  color: "#fff",

                  background:
                    "linear-gradient(135deg,#2563eb,#60a5fa)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#1d4ed8,#3b82f6)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const iconBox = {
  width: 50,
  height: 50,

  borderRadius: "14px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background:
    "rgba(255,255,255,0.08)",

  backdropFilter: "blur(10px)",
};

const inputStyle = {
  mb: 2,

  "& .MuiOutlinedInput-root": {
    color: "#fff",

    borderRadius: "14px",

    background:
      "rgba(255,255,255,0.08)",

    "& fieldset": {
      borderColor:
        "rgba(255,255,255,0.15)",
    },

    "&:hover fieldset": {
      borderColor:
        "rgba(255,255,255,0.25)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#60a5fa",
    },
  },

  "& .MuiInputLabel-root": {
    color: "#dbeafe",
  },
};

export default Contact;