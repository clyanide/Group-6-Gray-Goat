import React from 'react';
import { List, Button } from 'semantic-ui-react'

export const CreateSongList = (props) => {
    const { songs, onUpdateSong, onDeleteSong } = props;
    return (
        <>
            <List divided verticalAlign="middle">
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
                                            <Button circular size="mini" icon="ellipsis vertical" />
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