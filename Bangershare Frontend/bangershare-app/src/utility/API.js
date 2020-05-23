import axios from "axios";
import { store } from "../store"
import { logoutUser } from "../actions/User"
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const baseURL = "https://bangersharebackend.azurewebsites.net/api/";

const bangerShareClient = axios.create({});

const refreshAuthLogic = failedRequest => {
  axios.post(baseURL + "User/token/refresh")
    .then((res) => {
      localStorage.setItem("token", res.data.accessToken)
      localStorage.setItem("refreshToken", res.data.refreshToken)
      failedRequest.config.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
      return Promise.resolve
    })
    .catch((err) => {
      console.log(err)
      store.dispatch(logoutUser())
    })
}

createAuthRefreshInterceptor(bangerShareClient, refreshAuthLogic)

export const login = (username, password) => {
  return bangerShareClient.post(baseURL + "User/login", {
    email: "",
    username: username,
    password: password,
  });
};

export const register = (email, username, password) => {
  return bangerShareClient.post(baseURL + "User/register", {
    email,
    username,
    password,
  });
};

export const getUser = (accessToken) => {
  return bangerShareClient.get(baseURL + "/User", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getUserFriends = (accessToken) => {
  return bangerShareClient.get(baseURL + "Friend", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getUserPlaylists = (accessToken) => {
  return bangerShareClient.get(baseURL + "Playlist", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getPlaylistForUsername = (accessToken, username) => {
  return bangerShareClient.get(baseURL + "Playlist/" + username, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const postPlaylist = (accessToken, name) => {
  return bangerShareClient.post(
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
  return bangerShareClient.post(
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
  return bangerShareClient.post(
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
  return bangerShareClient.put(
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
  return bangerShareClient.delete(
    baseURL + "Song/" + song.id + "?playlistId=" + playlistId,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const updateFriendRequest = (accessToken, username, senderName) => {
  return bangerShareClient.put(
    baseURL + "Friend",
    {
      senderUsername: senderName,
      receiverUsername: username,
      friendType: 0,
    },
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const deleteUserFriendRequest = (accessToken, username) => {
  return bangerShareClient.delete(baseURL + "Friend?username=" + username, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getPlaylistFromId = (accessToken, playlistId) => {
  return bangerShareClient.get(baseURL + "Playlist/single?playlistId=" + playlistId, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const followUserPlaylist = async (accessToken, playlistId) => {
  return await bangerShareClient.post(
    baseURL + "Playlist/follow/" + playlistId,
    {},
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const unfollowUserPlaylist = (accessToken, playlistId) => {
  return bangerShareClient.delete(baseURL + "Playlist/unfollow/" + playlistId, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const postLikeSong = (accessToken, songId) => {
  return bangerShareClient.post(
    baseURL + "Song/like?songId=" + songId,
    {},
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
};

export const deleteLikeSong = (accessToken, songId) => {
  return bangerShareClient.delete(baseURL + "Song/dislike?songId=" + songId, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getUserLikeSong = (accessToken) => {
  return bangerShareClient.get(baseURL + "Song/like", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getUsers = (accessToken) => {
  console.log(accessToken)
  return bangerShareClient.get(baseURL + "User/all", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
}

export const revokeToken = (accessToken) => {
  return bangerShareClient.post(baseURL + "User/token/revoke", {
    token: accessToken,
  });
};


