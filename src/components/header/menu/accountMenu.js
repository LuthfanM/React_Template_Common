import React, { useState } from "react";
import {Typography,
    Menu,
    MenuItem,
    Divider
     } from '@mui/material';
import useStyles from "./styles";
import classNames from "classnames";
import useTranslation from "../../../utils/i18n/translations";

const AccountMenu = ({profileMenu, setProfileMenu })=>{
    const classes = useStyles();
    const i18n = useTranslation();

    return(
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              Admin
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href=""
            >
              Last Login : 
            </Typography>
          </div>
          <Divider />
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              // onClick={() => signOut(userDispatch, props.history)}
            >
               {i18n["logout"]}
            </Typography>
          </div>
        </Menu>
    );
}

export default AccountMenu;