import axios from "axios";

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

export const getUser = (accessToken) => {
  return axios.get(baseURL + "/User", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
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
  return axios.delete(baseURL + "Friend?username=" + username, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
};

export const getPlaylistFromId = (accessToken, playlistId) => {
  return axios.get(baseURL + "Playlist/single?playlistId=" + playlistId, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
}

export const revokeToken = (accessToken) => {
  return axios.post(baseURL + "User/token/revoke", {
    token: accessToken,
  });
};

export const refreshAccessToken = (username) => {
  console.log(username)
  return axios
    .post(baseURL + "/User/token/refresh",
      {
        token: localStorage.getItem("refreshToken"),
        username: username,
      })
}
