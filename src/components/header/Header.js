import React, { useState } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import useTranslation from "../../utils/i18n/translations";
import {
  Typography, AppBar,
  Toolbar,
  InputBase,
  Badge,
  IconButton,
  Box
} from '@mui/material';
import useStyles from "./styles";
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { MHidden } from "../@material-extend";
import classNames from "classnames";
import {
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import AccountMenu from "./menu/accountMenu";
import '../../themes/components/header.scss';
import { dashboardFlags } from '../../helpers/common';

const notifications = [
  { id: 0, color: "warning", message: "Check out this awesome ticket" },
  {
    id: 1,
    color: "success",
    type: "info",
    message: "What is the best way to get ...",
  },
  {
    id: 2,
    color: "secondary",
    type: "notification",
    message: "This is just a simple notification",
  },
  {
    id: 3,
    color: "primary",
    type: "e-commerce",
    message: "12 new orders has arrived today",
  },
];

const styles = (theme) => ({
  toolbar: theme.mixins.toolbar,
});

function Header({ onOpenSidebar, isOpen }) {
  var classes = useStyles();
  const i18n = useTranslation();

  // local
  var [mailMenu, setMailMenu] = useState(null);
  var [isMailsUnread, setIsMailsUnread] = useState(true);
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  var [profileMenu, setProfileMenu] = useState(null);
  var [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <MHidden width="lgDown">
          <Toolbar className={classes.toolbar}>
            <Box
              component="img"
              className={classes.boxLogo}
              alt="logo boost"
              src={dashboardFlags.shortBoost}
            />
            <Typography variant="h2" weight="medium" className={classes.logotype}>
              {i18n["app.name"]}
            </Typography>
          </Toolbar>
        </MHidden>

        {/* search */}
        <div className={classNames(classes.rightItemToolbar)}>
          <div
            className={classNames(classes.search, {
              [classes.searchFocused]: isSearchOpen,
            })}
          >
            <div
              className={classNames(classes.searchIcon, {
                [classes.searchIconOpened]: isSearchOpen,
              })}
              onClick={() => setSearchOpen(!isSearchOpen)}
            >
              <SearchIcon classes={{ root: classes.headerIcon }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>

          {/* notification */}
          <IconButton
            color="inherit"
            aria-haspopup="true"
            aria-controls="mail-menu"
            onClick={e => {
              setNotificationsMenu(e.currentTarget);
              setIsNotificationsUnread(false);
            }}
            className={classes.headerMenuButton}
          >
            <Badge
              badgeContent={isNotificationsUnread ? notifications.length : null}
              color="warning"
            >
              <NotificationsIcon classes={{ root: classes.headerIcon }} />
            </Badge>
          </IconButton>

          {/* account */}
          <IconButton
            aria-haspopup="true"
            color="inherit"
            className={classes.headerMenuButton}
            aria-controls="profile-menu"
            onClick={e => setProfileMenu(e.currentTarget)}
          >
            <AccountIcon classes={{ root: classes.headerIcon }} />
          </IconButton>

          <AccountMenu profileMenu={profileMenu} setProfileMenu={setProfileMenu} />
        </div>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  onOpenSidebar: PropTypes.func,
  isOpen: PropTypes.bool
};

export default withStyles(styles)(Header);