import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Popper,
  Fade,
  Paper,
  ListItemIcon,
} from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { green } from "@material-ui/core/colors";
import $ from "jquery"
import FavoriteIcon from '@material-ui/icons/Favorite';

export const CreateSongList = (props) => {
  const {
    songs,
    onUpdateSong,
    onDeleteSong,
    isOwner,
    handleSongClick,
    handleCurrentPlayingPlaylist,
    currentPlaylist,
    likeSong,
    likedSongs
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  console.log(likedSongs)

  return (
    <List>
      {songs.map((song) => (
        <ListItem
          button
          divider
          onClick={() => {
            handleSongClick(song);
            handleCurrentPlayingPlaylist(currentPlaylist);
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <MusicNoteIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={song.name} secondary={song.artist} />
          <ListItemSecondaryAction>
            {song.isPending ? (
              <>
                <IconButton
                  onClick={() => onUpdateSong(song, "isPending", false)}
                >
                  <AddCircleOutlineIcon style={{ color: green[500] }} />
                </IconButton>
                <IconButton onClick={() => onDeleteSong(song)}>
                  <HighlightOffIcon color="secondary" />
                </IconButton>
              </>
            ) : (
                <>
                  {song.hearts}
                  {likedSongs && likedSongs.length > 0 && likedSongs.find(x => x.id === song.id) !== undefined ?
                    <IconButton onClick={() => { console.log($.inArray(song, likedSongs)); console.log(song) }}>
                      <FavoriteIcon color="secondary" />
                    </IconButton>
                    : <IconButton onClick={() => likeSong(song.id)}>
                      <FavoriteBorderOutlinedIcon color="secondary" />
                    </IconButton>}
                  {isOwner ? (
                    <>
                      <IconButton onClick={handleClick}>
                        <MoreVertOutlinedIcon />
                      </IconButton>
                      <Popper
                        open={open}
                        anchorEl={anchorEl}
                        placement="bottom-end"
                        transition
                      >
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                              <List>
                                <ListItem button>
                                  <ListItemIcon>
                                    <EditOutlinedIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    style={{ textAlign: "center" }}
                                    primary="Edit"
                                  />
                                </ListItem>
                                <ListItem
                                  button
                                  onClick={() => onDeleteSong(song)}
                                >
                                  <ListItemIcon>
                                    <DeleteOutlinedIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    style={{ textAlign: "center" }}
                                    primary="Delete"
                                  />
                                </ListItem>
                              </List>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    </>
                  ) : null}
                </>
              )}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default CreateSongList;
