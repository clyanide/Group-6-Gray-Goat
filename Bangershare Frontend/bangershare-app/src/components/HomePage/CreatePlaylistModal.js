import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";

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

  return (
    <Modal open={open} onClose={() => handleModal(false)}>
      <Modal.Header>Give your playlist a name.</Modal.Header>
      <Modal.Content>
        <Input
          placeholder={"Please enter a name"}
          onChange={(e) => handleNameOnChange(e)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button onClick={() => handleModal(false)}>Cancel</Button>
          <Button positive onClick={() => handleOnCreate()}>
            Create
          </Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
};

export default CreatePlaylistModal;
