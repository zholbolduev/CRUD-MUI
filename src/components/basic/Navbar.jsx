import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Home
          </Typography>

          <Box
            style={{
              display: "flex",
              marginLeft: "10%",
              justifyContent: "space-evenly",
              width: "60%",
            }}
          >
            <Button
              onClick={() => navigate("/add")}
              sx={{
                my: 2,
                color: "white",
                display: "block",
              }}
            >
              Add Product
            </Button>
            <Button
              //   onClick={() => navigate("/add")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Edit
            </Button>
            <Button
              //   onClick={() => navigate("/add")}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              search
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
