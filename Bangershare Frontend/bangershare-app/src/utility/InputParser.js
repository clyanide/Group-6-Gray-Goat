export const getYoutubeVideoID = (videoUrl) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = videoUrl.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
}

export const getSpotifyTrackId = (spotifyUrl) => {
    var regExp = /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/;
    var match = spotifyUrl.match(regExp)

    return (match) ? match[1] : false
}