import React from 'react';
import Songs from "./Songs"
import PendingSongs from "./PendingSongs"
import { List, Button, Icon, Label } from 'semantic-ui-react'

const SongList = (props) => {
    const { songs, isOwner } = props;

    return (
        <>
            <Songs songs={songs.filter(song => { return song.isPending === false })} />
            {isOwner ?
                <PendingSongs songs={songs.filter(song => { return song.isPending === true })} />
                :
                null
            }
        </>
    );
}

export const createSongList = (songs) => (
    <>
        {songs && songs.length ?
            <List divided verticalAlign="middle">
                {songs.map(song => (
                    <List.Item>
                        <List.Content verticalAlign="middle">
                            <List.Header>
                                {song.name}
                                <List horizontal floated="right" verticalAlign="middle">
                                    {song.isPending ?
                                        <List.Item>
                                            <Button size="mini">ADD</Button>
                                            <Button size="mini">Remove</Button>
                                        </List.Item>

                                        :
                                        <List.Item>
                                            <Label circular>
                                                {song.hearts}
                                            </Label>
                                            <Button size="mini">Hearts</Button>
                                            <Button circular size="mini">Setting</Button>
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
            :
            <div>No songs</div>
        }
    </>
)


export default SongList;