import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/logo.png";
import { red } from "@mui/material/colors";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mb: 2,
            }}
          >
            <Box
              sx={{
                background: `url(${logo})`,
                width: "226.667px",
                height: "111.797px",
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{
                ml: 2,
                color: "#6AA687",
                textAlign: "center",
                fontFamily: "Tahoma",
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              CÔNG TY TNHH TVP COSMETICS
            </Typography>
          </Box>
          <Box
            sx={{
              width: "700px",
              height: "500px",
              flexShrink: 0,
              borderRadius: "50px",
              borderStyle: "solid",
              borderColor: "#6AA687",
              borderWidth: "2px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "#6AA687",
                fontFamily: "Inter",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              ĐĂNG NHẬP
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: "100%", padding: "0 20%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Tên đăng nhập"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  display: "flex",
                  height: "50px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50px",
                  backgroundColor: "#6AA687",
                  ":hover": {
                    backgroundColor: "#5a9574",
                  },
                  mt: 2,
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
