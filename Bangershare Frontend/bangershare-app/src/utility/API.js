import axios from "axios";
import { setAccessToken } from "../actions/User";

const baseURL = "https://bangersharebackend.azurewebsites.net/api/";

export const login = (username, password) => {
  return axios.post(baseURL + "User/login", {
    email: "",
    username: username,
    password: password,
  });
};

export const register = (email, username, password) => {
  return axios.post(baseURL + "User/register", {
    email,
    username,
    password,
  });
};

export const getUserFriends = (accessToken) => {
  return axios.get(baseURL + "Friend", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getUserPlaylists = (accessToken) => {
  return axios.get(baseURL + "Playlist", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getPlaylistForUsername = (accessToken, username) => {
  return axios.get(baseURL + "Playlist/" + username, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const postPlaylist = (accessToken, name) => {
  return axios.post(
    baseURL + "Playlist",
    {
      id: 0,
      name,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const postSpotifySongToPlaylist = (
  accessToken,
  spotifySongId,
  playlistId
) => {
  return axios.post(
    baseURL +
    "Song/spotify?playlistId=" +
    playlistId +
    "&spotifySongId=" +
    spotifySongId,
    {},
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const postYoutubeSongToPlaylist = (
  accessToken,
  song,
  playlistId,
  youtubeId
) => {
  return axios.post(
    baseURL +
    "Song/youtube?playlistId=" +
    playlistId +
    "&youtubeId=" +
    youtubeId,
    {
      id: 0,
      isPending: true,
      hearts: 0,
      name: song.name,
      artist: song.artist,
      link: song.link,
      songType: song.songType,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const updateSong = (accessToken, song) => {
  return axios.put(
    baseURL + "Song/" + song.id,
    {
      id: song.id,
      isPending: song.isPending,
      hearts: song.hearts,
      name: song.name,
      artist: song.artist,
      link: song.link,
      songType: song.songType,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const deleteSong = (accessToken, song, playlistId) => {
  return axios.delete(
    baseURL + "Song/" + song.id + "?playlistId=" + playlistId,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const updateFriendRequest = (accessToken, username, senderName) => {
  return axios.put(
    baseURL + "Friend",
    {
      senderUsername: senderName,
      receiverUsername: username,
      friendType: 0
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  )
}

export const deleteUserFriendRequest = (accessToken, username) => {
  return axios.delete(
    baseURL + "Friend?username=" + username,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  )
}

export const refreshAccessToken = (user, callingFunction, failingFunction) => {
  return (dispatch) => {
    return axios
      .post(baseURL + "/User/refresh", {
        username: user.name,
        refreshToken: user.refreshToken,
      })
      .then((res) => {
        dispatch(setAccessToken(res));
        dispatch(callingFunction());
      })
      .catch((err) => {
        dispatch(failingFunction(err.message));
      });
  };
};
