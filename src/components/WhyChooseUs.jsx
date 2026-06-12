import React from "react";
import { Box, Typography } from "@mui/material";

/* ICONS */
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function WhyChooseUs() {
  const features = [
    {
      icon: (
        <FavoriteIcon
          sx={{
            fontSize: {
              xs: "34px",
              md: "42px",
            },
            color: "#ff6ba6",
          }}
        />
      ),
      title: "Friendly Care",
      description:
        "Comfortable and caring dental treatment for a stress-free experience.",
      glow: "#ff6ba6",
    },

    {
      icon: (
        <MedicalServicesIcon
          sx={{
            fontSize: {
              xs: "34px",
              md: "42px",
            },
            color: "#3b82f6",
          }}
        />
      ),
      title: "Expert Doctors",
      description:
        "Experienced dental specialists using modern techniques and equipment.",
      glow: "#3b82f6",
    },

    {
      icon: (
        <AutoAwesomeIcon
          sx={{
            fontSize: {
              xs: "34px",
              md: "42px",
            },
            color: "#f59e0b",
          }}
        />
      ),
      title: "Bright Smile",
      description:
        "Advanced treatments for a healthier and brighter smile.",
      glow: "#f59e0b",
    },

    {
      icon: (
        <EventAvailableIcon
          sx={{
            fontSize: {
              xs: "34px",
              md: "42px",
            },
            color: "#8b5cf6",
          }}
        />
      ),
      title: "Easy Booking",
      description:
        "Quick appointment booking with flexible scheduling options.",
      glow: "#8b5cf6",
    },

    {
      icon: (
        <SentimentSatisfiedAltIcon
          sx={{
            fontSize: {
              xs: "34px",
              md: "42px",
            },
            color: "#14b8a6",
          }}
        />
      ),
      title: "Happy Patients",
      description:
        "Trusted by many patients for quality treatment and friendly support.",
      glow: "#14b8a6",
    },

    {
      icon: (
        <EmojiEmotionsIcon
          sx={{
            fontSize: {
              xs: "34px",
              md: "42px",
            },
            color: "#2563eb",
          }}
        />
      ),
      title: "Comfort Care",
      description:
        "Gentle treatment ensuring maximum comfort during every visit.",
      glow: "#2563eb",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",

        py: {
          xs: 8,
          md: 14,
        },

        background:
          "linear-gradient(to bottom,#f8fbff,#eef6ff)",

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* BACKGROUND BLUR */}

      <Box
        sx={{
          position: "absolute",

          top: "-120px",

          right: "-120px",

          width: {
            xs: "180px",
            md: "320px",
          },

          height: {
            xs: "180px",
            md: "320px",
          },

          borderRadius: "50%",

          background:
            "rgba(59,130,246,0.14)",

          filter:
            "blur(120px)",
        }}
      />

      {/* MAIN GLASS CONTAINER */}

      <Box
        sx={{
          borderRadius: {
            xs: "24px",
            md: "42px",
          },

          p: {
            xs: 3,
            sm: 4,
            md: "55px",
          },

          mx: {
            xs: 2,
            sm: 3,
            md: 5,
          },

          background:
            "linear-gradient(135deg, rgba(255,255,255,0.28), rgba(219,234,254,0.22))",

          backdropFilter:
            "blur(28px)",

          WebkitBackdropFilter:
            "blur(28px)",

          border:
            "5px solid rgba(147,197,253,0.25)",

          boxShadow: `
            0 20px 45px rgba(59,130,246,0.10),
            0 0 35px rgba(96,165,250,0.10),
            inset 0 1px 0 rgba(255,255,255,0.55),
            inset 0 -8px 20px rgba(147,197,253,0.08)
          `,

          position: "relative",

          overflow: "hidden",

          "&::before": {
            content: '""',

            position: "absolute",

            top: "-120px",

            left: "-120px",

            width: "280px",

            height: "280px",

            borderRadius: "50%",

            background:
              "rgba(147,197,253,0.18)",

            filter:
              "blur(80px)",
          },

          "&::after": {
            content: '""',

            position: "absolute",

            bottom: "-120px",

            right: "-120px",

            width: "260px",

            height: "260px",

            borderRadius: "50%",

            background:
              "rgba(59,130,246,0.14)",

            filter:
              "blur(90px)",
          },

          zIndex: 2,
        }}
      >
        {/* TITLE */}

        <Box
          sx={{
            textAlign: "center",

            mb: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <Typography
            sx={{
              color: "#2563eb",

              fontWeight: "bold",

              letterSpacing: "2px",

              fontSize: {
                xs: "22px",
                sm: "28px",
                md: "40px",
              },
            }}
          >
            WHY CHOOSE US
          </Typography>

          <Typography
            sx={{
              mt: "18px",

              fontSize: {
                xs: "30px",
                sm: "38px",
                md: "50px",
              },

              lineHeight: {
                xs: "40px",
                md: "60px",
              },

              fontWeight: "bold",

              color: "#111",
            }}
          >
            We Care About Your Smile
          </Typography>
        </Box>

        {/* CARDS GRID */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            },

            gap: {
              xs: 2.5,
              md: "28px",
            },

            position: "relative",

            zIndex: 2,
          }}
        >
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",

                borderRadius: {
                  xs: "20px",
                  md: "26px",
                },

                p: {
                  xs: 2.5,
                  md: "28px",
                },

                overflow: "hidden",

                background:
                  "rgba(255,255,255,0.85)",

                "&::before": {
                  content: '""',

                  position: "absolute",

                  top: 0,

                  left: 0,

                  right: 0,

                  height: "70%",

                  background: `linear-gradient(to bottom, ${item.glow}80, transparent)`,

                  opacity: 0.6,
                },

                "&::after": {
                  content: '""',

                  position: "absolute",

                  bottom: 0,

                  left: 0,

                  right: 0,

                  height: "50%",

                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.9), transparent)",

                  opacity: 0.9,
                },

                boxShadow: `
                  0 12px 25px rgba(0,0,0,0.05),
                  0 0 30px ${item.glow}20,
                  inset 0 0 20px rgba(255,255,255,0.7)
                `,

                border:
                  "1px solid rgba(255,255,255,0.7)",

                transition: "0.35s",

                "&:hover": {
                  transform:
                    "translateY(-8px)",

                  boxShadow: `
                    0 18px 35px rgba(0,0,0,0.07),
                    0 0 40px ${item.glow}35
                  `,
                },
              }}
            >
              {item.icon}

              <Typography
                sx={{
                  mt: "18px",

                  fontSize: {
                    xs: "18px",
                    md: "21px",
                  },

                  fontWeight: "bold",

                  color: "#111",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  mt: "14px",

                  color: "#555",

                  fontSize: {
                    xs: "14px",
                    md: "15px",
                  },

                  lineHeight: {
                    xs: "24px",
                    md: "27px",
                  },
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;