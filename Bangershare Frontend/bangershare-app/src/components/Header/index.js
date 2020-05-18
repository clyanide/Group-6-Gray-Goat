import React from 'react'
import { Button, Icon, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const AppHeader = (props) => {
    const { onMenuClick, currentUser, currentPath } = props;

    return (
        <AppBar position="static" color="black">
            <Toolbar>
                {currentPath === "/login" ?
                    <Typography variant="h4" style={{ flexGrow: 1 }}>
                        BangerShare
                    </Typography>
                    :
                    <>
                        <IconButton onClick={() => onMenuClick(true)} edge="start" style={{ marginRight: "1%" }}><MenuIcon /></IconButton>
                        <Typography variant="h4" style={{ flexGrow: 1 }}>
                            <Link to="/home" style={{ color: "black" }}>
                                BangerShare
                            </Link>
                        </Typography>
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={8} />
                            <Grid direction="row" xs={4} container alignItems="flex-start" justify="flex-end">
                                <Dropdown pointing="top left" icon={false} floated trigger={<Button icon labelPosition="left">
                                    <Icon name="user circle" />
                                    {currentUser.name}
                                </Button>}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item icon="user" text={"Profile"} />
                                        <Dropdown.Item icon="settings" text={"Settings"} />
                                        <Dropdown.Item icon="sign out" text={"Sign out"} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>
                        </Grid>
                    </>
                }
            </Toolbar>
        </AppBar >
    );
}

export default AppHeader;