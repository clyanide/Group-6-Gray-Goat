import React from 'react';
import { List, Button, Popup } from 'semantic-ui-react'

export const CreateSongList = (props) => {
    const { songs, onUpdateSong, onDeleteSong, isOwner } = props;

    return (
        <>
            <List divided verticalAlign="middle" link>
                {songs.map(song => (
                    <List.Item>
                        <List.Content verticalAlign="middle">
                            <List.Header>
                                {song.name}
                                <List horizontal floated="right" verticalAlign="middle">
                                    {song.isPending ?
                                        <List.Item>
                                            <Button onClick={() => onUpdateSong(song, "isPending", false)} circular size="mini" icon="add" />
                                            <Button onClick={() => onDeleteSong(song)} circular size="mini" icon="remove" />
                                        </List.Item>
                                        :
                                        <List.Item>
                                            {song.hearts}
                                            <Button circular size="mini" icon="heart" />
                                            {isOwner ?
                                                <Popup position="bottom right" on="click" trigger={<Button circular size="mini" icon="ellipsis vertical" />}>
                                                    <Button.Group vertical>
                                                        <Button negative onClick={() => onDeleteSong(song)}>Delete</Button>
                                                        <Button>Edit</Button>
                                                    </Button.Group>
                                                </Popup>
                                                : null}
                                        </List.Item>
                                    }
                                </List>
                            </List.Header>
                            <List.Description>
                                {song.artist}
                            </List.Description>
                        </List.Content>
                    </List.Item>
                ))}
            </List>
        </>
    )
}

export default CreateSongList;