
import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import classNames from "classnames";
import { alpha, styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import { Card, Typography,   AppBar,
    Toolbar,
    Container,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Paper,
    Fab } from '@mui/material';
// styles
import useStyles from "./styles";
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { MHidden } from "../@material-extend";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  right: 0,
  left: 0,
  bottom: 0,
  position: 'fixed !important',
  backgroundColor: theme.palette.primaryBackground.main,
  borderTop: '5px solid '+theme.palette.secondaryBackground.darker
}));

function Footer(props) {
    var classes = useStyles();
  
    return (
      <div className={classes.appbar}>
        <AppBarStyle position="static" color="primary" >
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © Boost
            </Typography>
          </Toolbar>
        </Container>
      </AppBarStyle>
      </div>
    );
  }
  
  export default Footer;