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
  Badge,
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
    <div
      style={{
        overflowY: "scroll",
        height: "72vh",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <List>
        {songs.map((song) => (
          <ListItem
            button
            onClick={() => {
              handleSongClick(song);
              handleCurrentPlayingPlaylist(currentPlaylist);
            }}
          >
            <ListItemAvatar
              style={{ paddingLeft: "10px" }}
            >
              <Avatar
                style={{
                  backgroundColor: song.songType === 0 ? "#7d12ff" : "#ff3d00",
                }}
              >
                <MusicNoteIcon style={{ fill: "white" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              style={{
                width: "25vw",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                paddingLeft: "15px"
              }}
              primary={
                <Typography
                >
                  {song.name}
                </Typography>
              }
              secondary={
                <Typography
                  color="textSecondary"
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
                    {likedSongs &&
                      likedSongs.length > 0 &&
                      likedSongs.find((x) => x.id === song.id) !== undefined ? (
                        <div style={{ marginRight: "8px", display: "inline" }}>
                          <Tooltip title="Unlike Song">
                            <Badge badgeContent={<Typography variant="subtitle1">{song.hearts}</Typography>} color="secondary">
                              <IconButton
                                color="secondary"
                                onClick={() => unlikeSong(song.id)}
                              >
                                <FavoriteIcon />
                              </IconButton>
                            </Badge>
                          </Tooltip>
                        </div>
                      ) : (
                        <div style={{ marginRight: "8px", display: "inline" }}>
                          <Tooltip title="Like Song">
                            <Badge badgeContent={<Typography variant="subtitle1">{song.hearts}</Typography>} color="secondary">
                              <IconButton
                                color="secondary"
                                onClick={() => likeSong(song.id)}
                              >
                                <FavoriteBorderOutlinedIcon />
                              </IconButton>
                            </Badge>
                          </Tooltip>
                        </div>
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
