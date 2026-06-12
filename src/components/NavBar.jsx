import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderLeft: "1px solid rgba(255,255,255,0.3)",
        p: 3,
      }}
    >
      {/* Logo */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 5,
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "rgba(219, 234, 254, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(33,150,243,0.3)",
          }}
        >
          <MedicalServicesIcon
            sx={{
              color: "#1565c0",
              fontSize: 28,
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#1565c0",
          }}
        >
          Abi Dental Clinic
        </Typography>
      </Box>

      {/* Menu */}

      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: "16px",
                mb: 1,
                py: 1.3,

                "&.active": {
                  background: "rgba(33,150,243,0.12)",
                  color: "#1565c0",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Login */}

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 4,
          borderRadius: "30px",
          py: 1.3,
          background:
            "linear-gradient(135deg,#1e88e5,#42a5f5)",
          textTransform: "none",
          fontWeight: 600,
          boxShadow: "0 4px 20px rgba(33,150,243,0.4)",

          "&:hover": {
            background:
              "linear-gradient(135deg,#1976d2,#2196f3)",
          },
        }}
      >
        Login
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(174, 202, 254, 0.22)",

          backdropFilter: "blur(18px)",

          WebkitBackdropFilter: "blur(18px)",

          borderBottom:
            "1px solid rgba(255,255,255,0.35)",

          boxShadow:
            "0 8px 32px rgba(59,130,246,0.08)",

          px: {
            xs: 1,
            sm: 2,
            md: 3,
          },

          overflow: "hidden",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "80px !important",
          }}
        >
          {/* Logo */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: 44,
                  md: 52,
                },
                height: {
                  xs: 44,
                  md: 52,
                },
                borderRadius: "50%",
                background:
                  "rgba(219, 234, 254, 0.45)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                boxShadow:
                  "0 4px 20px rgba(33,150,243,0.4)",
              }}
            >
              <MedicalServicesIcon
                sx={{
                  color: "white",
                  fontSize: {
                    xs: 24,
                    md: 30,
                  },
                }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#1565c0",
                letterSpacing: 1,
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                },
              }}
            >
              Dental Clinic
            </Typography>
          </Box>

          {/* Desktop Menu */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#1565c0" : "#333",
                  fontWeight: 600,
                  fontSize: "18px",
                  position: "relative",
                  transition: "0.3s",
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>

          {/* Right Side */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Desktop Login */}

            <Button
              variant="contained"
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                borderRadius: "30px",
                px: 3,

                background:
                  "linear-gradient(135deg,#1e88e5,#42a5f5)",

                textTransform: "none",

                fontWeight: 600,

                boxShadow:
                  "0 4px 20px rgba(33,150,243,0.4)",

                "&:hover": {
                  background:
                    "linear-gradient(135deg,#1976d2,#2196f3)",
                },
              }}
            >
              Login
            </Button>

            {/* Mobile Menu */}

            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "#1565c0",
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;