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
  Typography,
  Tooltip,
} from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
    unlikeSong,
    likedSongs,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ overflowY: "scroll", height: "72vh" }}>
      <List>
        {songs.map((song) => (
          <ListItem
            button
            onClick={() => {
              handleSongClick(song);
              handleCurrentPlayingPlaylist(currentPlaylist);
            }}
          >
            <ListItemAvatar>
              <Avatar
                style={{
                  backgroundColor: song.songType === 0 ? "#7d12ff" : "#ff3d00",
                }}
              >
                <MusicNoteIcon style={{ fill: "white" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  style={{
                    width: "25vw",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {song.name}
                </Typography>
              }
              secondary={
                <Typography
                  color="textSecondary"
                  style={{
                    width: "25vw",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {song.artist}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              {song.isPending ? (
                <>
                  <Tooltip title="Add Song">
                    <IconButton
                      onClick={() => onUpdateSong(song, "isPending", false)}
                    >
                      <AddCircleOutlineIcon style={{ color: green[500] }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Remove Song">
                    <IconButton
                      color="secondary"
                      onClick={() => onDeleteSong(song)}
                    >
                      <HighlightOffIcon />
                    </IconButton>
                  </Tooltip>
                </>
              ) : (
                <>
                  <Typography
                    variant="subtitle1"
                    style={{
                      float: "left",
                      marginTop: "9.5px",
                      marginRight: "10px",
                    }}
                  >
                    <strong>{song.hearts}</strong>
                  </Typography>
                  {likedSongs &&
                  likedSongs.length > 0 &&
                  likedSongs.find((x) => x.id === song.id) !== undefined ? (
                    <Tooltip title="Unlike Song">
                      <IconButton
                        color="secondary"
                        onClick={() => unlikeSong(song.id)}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Like Song">
                      <IconButton
                        color="secondary"
                        onClick={() => likeSong(song.id)}
                      >
                        <FavoriteBorderOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  )}
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
    </div>
  );
};

export default CreateSongList;
