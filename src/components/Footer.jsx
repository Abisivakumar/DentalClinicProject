import React from "react";
import { Box, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GroupsIcon from "@mui/icons-material/Groups";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "300px" },
        background:
          "linear-gradient(to right,#dbeafe,#bfdbfe,#93c5fd)",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
        borderRadius: {
          xs: 0,
          md: "20px",
        },
        mt: 5,
        py: {
          xs: 5,
          md: 4,
        },
       
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent:"center",
        alignItems: "center",
        gap: {
          xs: 4,
          md:40,
        },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          position: "absolute",
          top: -40,
          right: -40,
          background:
            "radial-gradient(circle,rgba(59,130,246,0.3),transparent)",
          filter: "blur(35px)",
        }}
      />

      {/* Left Section */}
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "220px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ml:{xs:0,md:15}
        }}
      >
        <Box
          sx={{
            width: {
              xs: 90,
              md: 120,
            },
            height: {
              xs: 90,
              md: 120,
            },
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "@keyframes rotateLogo": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },

            "@keyframes reverseRotate": {
              from: {
                transform: "rotate(360deg)",
              },
              to: {
                transform: "rotate(0deg)",
              },
            },

            "@keyframes float": {
              "0%": {
                transform: "translateY(0px)",
              },
              "50%": {
                transform: "translateY(-8px)",
              },
              "100%": {
                transform: "translateY(0px)",
              },
            },

            animation:
              "float 4s ease-in-out infinite",
          }}
        >
          <Box
            component="img"
            src="logo1.png"
            alt="logo1"
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: 0.5,
              animation:
                "rotateLogo 12s linear infinite",
            }}
          />

          <Box
            component="img"
            src="logo2.png"
            alt="logo2"
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              animation:
                "reverseRotate 15s linear infinite",
                
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: 2,
            fontSize: {
              xs: "22px",
              md: "26px",
            },
            fontWeight: "bold",
            color: "#1E3A8A",
            textAlign: "center",
          }}
        >
          Abi Dental Clinic
        </Typography>

        <Typography
          sx={{
            color: "#475569",
            mt: 0.5,
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Healthy Smile Starts Here
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          gap: {
            xs: 5,
            md: 10,
          },
          flexWrap: "wrap",

          justifyContent: {
            xs: "center",
            md: "flex-start",
          },

          alignItems: "flex-start",

          width: "100%",
        }}
      >
        {/* Quick Links */}
        <Box sx={{ minWidth: "180px" }}>
          <Typography sx={headingStyle}>
            Quick Links
          </Typography>

          <Typography sx={textStyle}>
            <HomeIcon sx={iconStyle} />
            Home
          </Typography>

          <Typography sx={textStyle}>
            <InfoIcon sx={iconStyle} />
            About
          </Typography>

          <Typography sx={textStyle}>
            <MedicalServicesIcon sx={iconStyle} />
            Services
          </Typography>

          <Typography sx={textStyle}>
            <GroupsIcon sx={iconStyle} />
            Doctors
          </Typography>

          <Typography sx={textStyle}>
            <EventAvailableIcon sx={iconStyle} />
            Appointment
          </Typography>
        </Box>

        {/* Services */}
        <Box sx={{ minWidth: "180px" }}>
          <Typography sx={headingStyle}>
            Services
          </Typography>

          <Typography sx={textStyle}>
            Teeth Cleaning
          </Typography>

          <Typography sx={textStyle}>
            Root Canal
          </Typography>

          <Typography sx={textStyle}>
            Dental Implant
          </Typography>

          <Typography sx={textStyle}>
            Smile Makeover
          </Typography>

          <Typography sx={textStyle}>
            Teeth Whitening
          </Typography>

          <Typography sx={textStyle}>
            Braces
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={{ minWidth: "200px" }}>
          <Typography sx={headingStyle}>
            Contact
          </Typography>

          <Typography sx={textStyle}>
            <ContactPhoneIcon sx={iconStyle} />
            +91 9876543210
          </Typography>

          <Typography sx={textStyle}>
            <EmailIcon sx={iconStyle} />
            abi@gmail.com
          </Typography>

          <Typography sx={textStyle}>
            <LocationOnIcon sx={iconStyle} />
            Madurai, Tamil Nadu
          </Typography>

          <Typography sx={textStyle}>
            <AccessTimeIcon sx={iconStyle} />
            Mon - Sat : 9AM - 8PM
          </Typography>

          <Typography sx={textStyle}>
            <AccessTimeIcon sx={iconStyle} />
            Sunday : 10AM - 2PM
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const headingStyle = {
  fontSize: {
    xs: "18px",
    md: "20px",
  },

  fontWeight: "bold",

  color: "#1E3A8A",

  mb: 1.5,

  textAlign: "left",
};

const textStyle = {
  display: "flex",

  alignItems: "center",

  gap: 1,

  color: "#334155",

  fontSize: {
    xs: "14px",
    md: "15px",
  },

  mb: 1,

  cursor: "pointer",

  justifyContent: "flex-start",

  transition: "0.3s",

  "&:hover": {
    color: "#2563EB",

    transform: "translateX(5px)",
  },
};

const iconStyle = {
  color: "#2563EB",
  fontSize: "18px",
};

export default Footer;