import React from "react";
import "../Components/LoginPage.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoBenefit from "../Images/logoBenefit.png";
import logoMultisport from "../Images/MultiSport_logo.png";
import logoMultiLife from "../Images/MultiLife_logo.png";
import logoMyBenefit from "../Images/MyBenefit_logo.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Karolina-Dul">
        Karolina Duljas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <section className="front-page">
        <section className="LP-left-side">
          <ThemeProvider style={{ background: "green" }} theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box className="box">
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                  Logowanie
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adres e-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Hasło"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Zapamiętaj mnie"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Zaloguj się
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Zapomniałeś hasła?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Nie masz jeszcze konta? Zarejestruj się"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Box>
            </Container>
          </ThemeProvider>
        </section>

        <section className="LP-right-side">
          <img
            src={logoBenefit}
            alt="logo Benefit Systems"
            className="logo-benefit-systems"
          />
          <h2>Jedno partner - wiele możliwości!</h2>
          <h2>NASZE PRODUKTY</h2>
          <div className="LP-logo-products">
            <img
              src={logoMultisport}
              alt="logo Multisport"
              className="LP-logo-card"
            />
            <img
              src={logoMultiLife}
              alt="logo MultiLife"
              className="LP-logo-card"
            />
            <img
              src={logoMyBenefit}
              alt="logo MyBenefit"
              className="LP-logo-card"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
