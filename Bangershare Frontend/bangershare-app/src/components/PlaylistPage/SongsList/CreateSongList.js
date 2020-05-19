import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { green } from '@material-ui/core/colors';

export const CreateSongList = (props) => {
  const { songs, onUpdateSong, onDeleteSong, isOwner } = props;

  return (
    <List>
      {songs.map(song => (
        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <MusicNoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={song.name} secondary={song.artist} />
          <ListItemSecondaryAction>
            {song.isPending ?
              <>
                <IconButton onClick={() => onUpdateSong(song, "isPending", false)}>
                  <AddCircleOutlineIcon style={{ color: green[500] }} />
                </IconButton>
                <IconButton onClick={() => onDeleteSong(song)}>
                  <HighlightOffIcon color="secondary" />
                </IconButton>
              </>
              :
              <>
                {song.hearts}
                <IconButton>
                  <FavoriteBorderOutlinedIcon color="secondary" />
                </IconButton>
                {isOwner ?
                  <IconButton>
                    <MoreVertOutlinedIcon />
                  </IconButton>
                  : null}
              </>
            }
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default CreateSongList;