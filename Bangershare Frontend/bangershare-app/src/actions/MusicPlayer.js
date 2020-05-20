export const actionTypes = {
  SET_TYPE: "SET_TYPE",
  SET_URI: "SET_URI",
  SET_LINK: "SET_LINK",
  SET_DURATION: "SET_DURATION",
};

export const setType = (type) => ({
  type: actionTypes.SET_TYPE,
  songType: type,
});

export const setUri = (uri) => ({
  type: actionTypes.SET_URI,
  songUri: uri,
});

export const setLink = (link) => ({
  type: actionTypes.SET_LINK,
  songLink: link,
});

export const setDuration = (duration) => ({
  type: actionTypes.SET_DURATION,
  songDuration: duration,
});
