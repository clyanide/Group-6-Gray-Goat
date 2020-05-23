import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const CreatePlaylistModal = (props) => {
  const { open, handleModal, createPlaylist } = props;

  const [playlistName, setName] = useState("");

  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };

  const handleOnCreate = () => {
    createPlaylist(playlistName);
    handleModal(false);
  };

  const body = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        width: "30vw",
        height: "20vh",
      }}
    >
      <div style={{ flex: 1, paddingTop: "1vh" }}>
        <h2>Give your playlist a name</h2>
      </div>
      <div style={{ flex: 1 }}>
        <form>
          <TextField
            label="Please enter a name"
            variant="outlined"
            onChange={(e) => handleNameOnChange(e)}
          />
        </form>
      </div>
      <div style={{ flex: 1, paddingTop: "2vh" }}>
        <ButtonGroup>
          <Button onClick={() => handleModal(false)}>Cancel</Button>
          <Button onClick={() => handleOnCreate()}>Create</Button>
        </ButtonGroup>
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleModal(false)}
        style={{
          backgroundColor: "gray",
          width: "30vw",
          height: "20vh",
          position: "absolute",
          left: "35vw",
          top: "40vh",
        }}
      >
        {body}
      </Modal>
    </div>
  );
};

export default CreatePlaylistModal;
