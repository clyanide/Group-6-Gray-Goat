import React from 'react';
import {
    Icon,
    Menu,
    Sidebar,
    List
} from 'semantic-ui-react'
import { Typography } from '@material-ui/core';

const mockData = [
    {
        name: "test"
    },
    {
        name: "hello"
    },
    {
        name: "Yes"
    }
]

const AppSideBar = (props) => {
    const { open, onClose } = props;
    return (
        <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            visible={open}
            width="thin"
            vertical
            onHide={() => onClose(false)}>
            <Menu.Item as="a">
                <Icon name='home' />
                    Home
                </Menu.Item>
            <Menu.Item as="a">
                <Icon name='user' />
                    Friends
                </Menu.Item>
            <Menu.Item >
                <Menu.Header>
                    Your Playlists
                </Menu.Header>
                <List>
                    {mockData.map(data => (
                        <List.Item as="a" onClick={() => console.log(data)}>
                            <Typography as="a">
                                {data.name}
                            </Typography>
                        </List.Item>
                    ))}
                </List>
            </Menu.Item>
        </Sidebar>
    );
}

export default AppSideBar;