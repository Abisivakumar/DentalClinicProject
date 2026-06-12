import React from "react";

import {
  Box,
  Typography,
  Button
} from "@mui/material";

function Services({ preview }) {

  const services = [
    {
      title: "Teeth Cleaning",
      image: "teeth.jpg",
      description:
        "Professional teeth cleaning to remove plaque and keep your smile fresh and healthy."
    },

    {
      title: "Root Canal",
      image: "root.jpg",
      description:
        "Advanced root canal treatment for painless care and long-lasting dental protection."
    },

    {
      title: "Dental Implant",
      image: "dental.jpg",
      description:
        "Restore missing teeth with strong and natural-looking dental implants."
    },

    {
      title: "Smile Makeover",
      image: "smiles.jpg",
      description:
        "Enhance your confidence with custom smile makeover and cosmetic dental solutions."
    },

    {
      title: "Teeth Whitening",
      image: "whitening.jpg",
      description:
        "Get a brighter and whiter smile with safe and modern whitening treatments."
    },

    {
      title: "Braces",
      image: "braces.jpg",
      description:
        "Straighten your teeth with modern braces treatment for a perfect confident smile."
    }
  ];

  const displayServices =
    preview
      ? services.slice(0, 3)
      : services;

  return (
    <Box
      sx={{
        width: "100%",

        py: {
          xs: 8,
          md: 15
        },

        background:
          "linear-gradient(to bottom,#f8fbff,#eef6ff)",

        position: "relative",

        overflow: "hidden"
      }}
    >

      {/* TOP BLUR */}

      <Box
        sx={{
          width: {
            xs: "180px",
            md: "300px"
          },

          height: {
            xs: "180px",
            md: "300px"
          },

          borderRadius: "50%",

          background: "#bfdbfe",

          filter: "blur(120px)",

          position: "absolute",

          top: "-100px",

          left: "-120px",

          opacity: 0.5
        }}
      />

      {/* SECTION TITLE */}

      <Box
        sx={{
          textAlign: "center",

          mb: {
            xs: 5,
            md: "70px"
          },

          px: {
            xs: 2,
            md: 0
          },

          position: "relative",

          zIndex: 2
        }}
      >
        <Typography
          sx={{
            color: "#2563eb",

            fontWeight: "bold",

            letterSpacing: "2px",

            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "40px"
            }
          }}
        >
          OUR SERVICES
        </Typography>

        <Typography
          sx={{
            mt: "18px",

            fontSize: {
              xs: "32px",
              sm: "40px",
              md: "54px"
            },

            fontWeight: "bold",

            color: "#111"
          }}
        >
          Dental Care Services
        </Typography>

        <Typography
          sx={{
            mt: "18px",

            color: "#666",

            fontSize: {
              xs: "15px",
              md: "18px"
            },

            lineHeight: {
              xs: "28px",
              md: "32px"
            },

            width: {
              xs: "100%",
              md: "700px"
            },

            mx: "auto"
          }}
        >
          We provide advanced dental
          treatments with modern
          technology and expert care
          for a brighter and healthier smile.
        </Typography>
      </Box>

      {/* SERVICES GRID */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)"
          },

          gap: {
            xs: 3,
            md: "35px"
          },

          position: "relative",

          zIndex: 2,

          ml: {
            xs: 2,
            md: 5
          },

          mr: {
            xs: 2,
            md: 5
          }
        }}
      >
        {displayServices.map((item, index) => (
          <Box
            key={index}
            sx={{
              background:
                "rgba(255,255,255,0.7)",

              backdropFilter:
                "blur(14px)",

              border:
                "1px solid rgba(255,255,255,0.5)",

              borderRadius: {
                xs: "24px",
                md: "35px"
              },

              overflow: "hidden",

              transition: "0.4s",

              boxShadow:
                "0 10px 30px rgba(0,0,0,0.06)",

              "&:hover": {
                transform:
                  "translateY(-10px)",

                boxShadow:
                  "0 18px 40px rgba(37,99,235,0.15)"
              }
            }}
          >

            {/* IMAGE */}

            <Box
              component="img"

              src={item.image}

              alt={item.title}

              sx={{
                width: "100%",

                height: {
                  xs: "220px",
                  sm: "240px",
                  md: "260px"
                },

                objectFit: "cover"
              }}
            />

            {/* CONTENT */}

            <Box
              sx={{
                p: {
                  xs: 2.5,
                  md: "30px"
                }
              }}
            >

              {/* TITLE */}

              <Typography
                sx={{
                  fontSize: {
                    xs: "22px",
                    md: "28px"
                  },

                  fontWeight: "bold",

                  color: "#111"
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  mt: "18px",

                  color: "#666",

                  fontSize: {
                    xs: "15px",
                    md: "17px"
                  },

                  lineHeight: {
                    xs: "26px",
                    md: "30px"
                  }
                }}
              >
                {item.description}
              </Typography>

              {/* BUTTON */}

              <Button
                sx={{
                  mt: "30px",

                  width: {
                    xs: "100%",
                    sm: "auto"
                  },

                  background:
                    "linear-gradient(to right,#2563eb,#60a5fa)",

                  color: "white",

                  px: "28px",

                  py: "12px",

                  borderRadius: "40px",

                  textTransform: "none",

                  fontSize: "15px",

                  fontWeight: "bold",

                  boxShadow:
                    "0 10px 25px rgba(37,99,235,0.25)",

                  transition: "0.4s",

                  "&:hover": {
                    transform:
                      "translateY(-3px)",

                    background:
                      "linear-gradient(to right,#1d4ed8,#3b82f6)"
                  }
                }}
              >
                Learn More
              </Button>

            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Services;