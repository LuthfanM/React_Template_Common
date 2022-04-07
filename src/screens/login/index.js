import React, { useContext, useEffect, useState } from "react";
import "../../themes/login.scss";
import { Card, Stack, Link, Container, Typography } from "@mui/material";
import { RootStyle, SectionStyle, ContentStyle } from "./styles";
import { loginFlags } from "../../helpers/common";
import LoginForm from "./loginForm";
import useTranslation from "../../utils/i18n/translations";
import { MHidden } from "../../components/@material-extend";

const Login = (props) => {
  const i18n = useTranslation();

  return (
    <RootStyle title="Login Credit Score">
      <MHidden width="mdDown">
        <SectionStyle>
          <img src={loginFlags.logoCS} alt="logoCS" />
          {/* <Typography variant="h2" sx={{ px: 5, mt: 10, mb: 5 }}>
              Credit Score
            </Typography> */}
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "custom.blueCustom", textTransform: "uppercase" }}
            >
              {i18n["boost.indonesia"]}
            </Typography>
            <Typography
              sx={{ color: "custom.blackCustom", fontWeight: "medium" }}
            >
              {i18n["sign.in.to.start.session"]}
            </Typography>
          </Stack>
          <LoginForm />

          <MHidden width="mdDown">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Boost Indonesia @2022
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
