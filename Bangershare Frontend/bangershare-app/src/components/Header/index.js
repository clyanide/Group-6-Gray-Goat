import React from 'react'
import { Header, Segment, Grid, Button, Icon } from 'semantic-ui-react'

const AppHeader = (props) => {
    const { currentUser } = props;

    return (
        <Segment padded>
            <Grid verticalAlign="middle" padded="horizontally">
                <Grid.Column floated="left">
                    <Header as="h2">BangerShare</Header>
                </Grid.Column>
                <Grid.Column width="8" />
                <Grid.Column floated="right" textAlign="center">
                    {currentUser.name !== "" ?
                        <Button icon labelPosition="left">
                            <Icon name="user circle" />
                            {currentUser.name}
                        </Button>
                        : null}
                </Grid.Column>
            </Grid>
        </Segment >
    );
}

export default AppHeader;