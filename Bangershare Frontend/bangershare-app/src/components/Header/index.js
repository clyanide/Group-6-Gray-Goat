import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  IconButton,
  Button,
  Popper,
  Fade,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const AppHeader = (props) => {
  const {
    onMenuClick,
    currentPath,
    isFetching,
    setProfileUser,
    signOut,
    setCurrentUser,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onProfileClick = () => {
    setProfileUser(localStorage.getItem("username"));
  };

  useEffect(() => {
    if (localStorage.getItem("username" !== null)) {
      setCurrentUser(localStorage.getItem("username"));
    }
  }, [setCurrentUser]);

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#282828", zIndex: "1" }}
    >
      <Toolbar style={{ zIndex: "1" }}>
        {currentPath === "/login" ? (
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            BangerShare
          </Typography>
        ) : (
            <>
              <IconButton
                disabled={isFetching}
                onClick={() => onMenuClick(true)}
                edge="start"
                style={{ marginRight: "1%" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" style={{ flexGrow: 1 }}>
                <Link to="/home" style={{ color: "white" }}>
                  BangerShare
              </Link>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e)}
              >
                {localStorage.getItem("username")}
              </Button>
              <Popper
                open={open}
                anchorEl={anchorEl}
                transition
                style={{ position: "relative", zIndex: "10" }}
                placement="bottom-end"
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <ClickAwayListener onClickAway={handleClickAway}>
                      <Paper>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              onProfileClick();
                              handleClickAway();
                            }}
                          >
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <Typography>Profile</Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              signOut();
                              handleClickAway();
                            }}
                          >
                            <ListItemIcon>
                              <ExitToAppIcon color="secondary" />
                            </ListItemIcon>
                            <Typography>Logout</Typography>
                          </MenuItem>
                        </MenuList>
                      </Paper>
                    </ClickAwayListener>
                  </Fade>
                )}
              </Popper>
            </>
          )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
