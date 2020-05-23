import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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
    <Paper
      variant="outlined"
      elevation={2}
      style={{
        textAlign: "center",
        minWidth: "500px",
        borderRadius: "30px",
        outline: "none",
      }}
    >
      <div style={{ flex: 1, paddingTop: "2vh" }}>
        <h2>Give your playlist a name</h2>
      </div>
      <div style={{ flex: 1, paddingTop: "2vh" }}>
        <form>
          <TextField
            label="Please enter a name"
            variant="outlined"
            onChange={(e) => handleNameOnChange(e)}
            style={{ width: "80%" }}
          />
        </form>
      </div>
      <div style={{ flex: 1, paddingTop: "2vh" }}>
        <ButtonGroup style={{ marginBottom: "2vh" }}>
          <Button onClick={() => handleModal(false)}>Cancel</Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleOnCreate()}
          >
            Create
          </Button>
        </ButtonGroup>
      </div>
    </Paper>
  );
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal
        open={open}
        onClose={() => handleModal(false)}
        style={{
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
