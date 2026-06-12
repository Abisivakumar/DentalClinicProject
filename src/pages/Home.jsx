import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Button
} from "@mui/material";

import Services from "./Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Doctor from "./Doctor";

function Home() {
   const navigate = useNavigate();

  return (
<>
    <Box
      sx={{

        width: "100%",
        minHeight: "100vh",

        backgroundImage:
          "url('home.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        position: "relative",
        overflow: "hidden"

      }}
    >

      {/* OVERLAY */}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "rgba(255,255,255,0.12)"
        }}
      />

      {/* BLUE BLUR */}

      <Box
        sx={{
         width: {
  xs: "180px",
  md: "320px",
},

height: {
  xs: "180px",
  md: "320px",
},
          borderRadius: "50%",
          background: "#93c5fd",
          filter: "blur(120px)",
          position: "absolute",
          top: "-120px",
          left: "-100px",
          opacity: 0.4
        }}
      />

      {/* HERO SECTION */}

      <Box
  sx={{
    position: "relative",
    zIndex: 5,

    width: "100%",
    minHeight: "100vh",

    display: "flex",

    flexDirection: {
      xs: "column-reverse",
      md: "row",
    },

    justifyContent: "space-between",
    alignItems: "center",

    gap: {
      xs: 4,
      md: 5,
    },

    px: {
      xs: 3,
      sm: 4,
      md: 8,
      lg: 10,
    },

    pt: {
      xs: 12,
      md: 0,
    },
  }}
>

        {/* LEFT SIDE */}

        <Box
  sx={{
    width: {
      xs: "100%",
      md: "48%",
    },

    textAlign: {
      xs: "center",
      md: "left",
    },
  }}
>

          {/* SMALL TEXT */}

          <Typography
            sx={{

              color: "#2563eb",

              fontWeight: "bold",

              letterSpacing: "2px",

              pr:5,

              fontSize: {
  xs: "15px",
  sm: "15px",
  md: "18px",
},

              animation:
                "fadeText 1s ease",

              "@keyframes fadeText": {

                from: {
                  opacity: 0,
                  transform:
                    "translateY(40px)"
                },

                to: {
                  opacity: 1,
                  transform:
                    "translateY(0px)"
                }

              }

            }}
          >
            MODERN DENTAL CARE
          </Typography>

          {/* MAIN HEADING */}

          <Typography
            sx={{

              mt: "20px",

              pr:5,

              fontSize: {
  xs: "35px",
  sm: "52px",
  md: "78px",
},

lineHeight: {
  xs: "50px",
  sm: "60px",
  md: "90px",
},

              fontWeight: "bold",

              color: "#111",

              animation:
                "slideLeft 1.2s ease",

              "@keyframes slideLeft": {

                from: {
                  opacity: 0,
                  transform:
                    "translateX(-80px)"
                },

                to: {
                  opacity: 1,
                  transform:
                    "translateX(0px)"
                }

              }

            }}
          >
            Healthy Smile
          </Typography>

          {/* SECOND LINE */}

         <Box
  sx={{
    display: "flex",
    alignItems: "center",

    justifyContent: {
      xs: "center",
      md: "flex-start",
    },

    flexWrap: "wrap",
  }}
>

            <Typography
              sx={{
                pr:4,
                

                fontSize: {
  xs: "35px",
  sm: "52px",
  md: "78px",
},

lineHeight: {
  xs: "50px",
  sm: "60px",
  md: "90px",
},

                fontWeight: "bold",

                background:
                  "linear-gradient(to right,#2563eb,#60a5fa)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent"

              }}
            >
              Starts Here
            </Typography>

            {/* HEART IMAGE */}

            <Box
              component="img"

              src="little heart.png"

              alt="heart"

              sx={{
                pr:5,

               width: {
  xs: "100px",
  sm: "90px",
  md: "150px",
},

                mt: "10px",

                animation:
                  "floatHeart 3s ease-in-out infinite",

                "@keyframes floatHeart": {

                  "0%": {
                    transform:
                      "translateY(0px)"
                  },

                  "50%": {
                    transform:
                      "translateY(-8px)"
                  },

                  "100%": {
                    transform:
                      "translateY(0px)"
                  }

                }

              }}
            />

          </Box>

          {/* DESCRIPTION */}

          <Typography
            sx={{

              mt: "20px",

              color: "#555",

              fontSize: {
  xs: "15px",
  sm: "17px",
  md: "20px",
},

lineHeight: {
  xs: "28px",
  md: "36px",
},

width: {
  xs: "85%",
  md: "90%",
},

              animation:
                "fadePara 1.5s ease",

              "@keyframes fadePara": {

                from: {
                  opacity: 0
                },

                to: {
                  opacity: 1
                }

              }

            }}
          >
            Experience advanced dental care
            with expert doctors and modern
            treatments for a brighter,
            healthier and more confident smile.
          </Typography>

          {/* BUTTONS */}

          <Box
  sx={{
    display: "flex",

    flexDirection: {
      xs: "column",
      sm: "row",
    },

    gap: "20px",

    mt: "40px",

  mb:5,
    ml:2,

    justifyContent: {
      xs: "center",
      md: "flex-start",
    },
  }}
>

            {/* BUTTON 1 */}

            <Button
              sx={{
                width: {
  xs: "230px",
  sm: "auto",
},
                background:
                  "linear-gradient(to right,#2563eb,#3b82f6)",

                color: "white",

                px: "35px",

                py: "15px",

                borderRadius: "40px",

                textTransform: "none",

                fontSize: "14px",

                fontWeight: "bold",

                transition: "0.4s",

                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.3)",

                "&:hover": {

                  transform:
                    "translateY(-4px)",

                  boxShadow:
                    "0 14px 30px rgba(37,99,235,0.5)",

                  background:
                    "linear-gradient(to right,#1d4ed8,#2563eb)"
                }

              }}

               onClick={() => navigate("/Appointment")}
            >
              Book Appointment
            </Button>

            {/* BUTTON 2 */}

            <Button
              sx={{
                width: {
  xs: "230px",
  sm: "auto",
},

                background:
                  "rgba(255,255,255,0.7)",

                color: "#2563eb",

                px: "35px",

                py: "15px",

                borderRadius: "40px",

                textTransform: "none",

                fontSize: "16px",

                fontWeight: "bold",

                backdropFilter:
                  "blur(10px)",

                border:
                  "1px solid rgba(255,255,255,0.5)",

                transition: "0.4s",

                "&:hover": {

                  background:
                    "white",

                  transform:
                    "translateY(-4px)"
                }

              }}

            >
              Learn More
            </Button>

          </Box>

        </Box>

        {/* RIGHT SIDE */}

        <Box
  sx={{
    width: {
      xs: "100%",
      md: "42%",
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>

          {/* IMAGE CARD */}

          <Box
  sx={{
    width: {
      xs: "100%",
      sm: "320px",
      md: "450px",
    },

    height: {
      xs: "300px",
      sm: "420px",
      md: "540px",
    },

    borderRadius: {
      xs: "25px",
      md: "35px",
    },

    mr: 6,

    overflow: "hidden",

    background: "rgba(255,255,255,0.18)",

    backdropFilter: "blur(15px)",

    border: "1px solid rgba(255,255,255,0.3)",

    boxShadow:
      "0 8px 30px hsla(244, 84%, 20%, 0.12)",
  }}
>

            {/* IMAGE */}

            <Box
              component="img"

              src="check.jpg"

              alt="doctor"

              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

          </Box>

        </Box>

      </Box>

    </Box>

    <Services preview={true}/>
    <WhyChooseUs/>
    <Doctor preview={true}/>

    </>
  );
}

export default Home;