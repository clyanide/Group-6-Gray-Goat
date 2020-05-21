import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    IconButton,
    Divider
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FavoriteIcon from '@material-ui/icons/Favorite';

const PlaylistCard = (props) => {
    const { playlist, handleOnPlaylistClick, followPlaylist } = props;

    return (
        < Card >
            <CardActionArea onClick={() => handleOnPlaylistClick(playlist)}>
                <CardContent>
                    <Typography variant="h5">{playlist.name}</Typography>
                    <Typography variant="subtitle1">
                        Created by {playlist.creator}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions>
                {playlist.following ?
                    <IconButton >
                        <FavoriteIcon fontSize="small" color="secondary" />
                    </IconButton>
                    :
                    <IconButton onClick={() => followPlaylist(playlist.id)}>
                        <FavoriteBorderIcon fontSize="small" color="secondary" />
                    </IconButton>
                }
                <IconButton>
                    <PlayCircleOutlineIcon fontSize="small" />
                </IconButton>
            </CardActions>
        </Card >
    );
}

export default PlaylistCard;