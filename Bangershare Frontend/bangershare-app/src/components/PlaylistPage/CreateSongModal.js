import React, { useState } from "react";
import { Button, Header, Form, Modal } from "semantic-ui-react";

const CreateSongModal = (props) => {
  const { open, handleModal, postSong } = props;

  const [song, setSong] = useState({
    name: "",
    artist: "",
    link: "",
    songType: 2,
  });

  const [spotify, setSpotify] = useState(false);

  const toggleSpotify = () => {
    setSpotify(!spotify);
  };

  const setSongDetail = (key, value) => {
    setSong({
      ...song,
      [key]: value,
    });
  };

  const createSong = () => {
    postSong(song);
    handleModal(false);
  };

  return (
    <Modal open={open} onClose={() => handleModal(false)}>
      <Header
        icon="music"
        content={
          <>
            Add a song
            <Button.Group>
              <Button
                disabled={!spotify}
                onClick={() => {
                  toggleSpotify();
                  setSongDetail("songType", 2);
                }}
              >
                Youtube
              </Button>
              <Button
                disabled={spotify}
                onClick={() => {
                  toggleSpotify();
                  setSongDetail("songType", 0);
                }}
              >
                Spotify
              </Button>
            </Button.Group>
          </>
        }
      />
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Song name</label>
            <input
              placeholder={"Enter a name of a song"}
              onChange={(e) => setSongDetail("name", e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Artist Name</label>
            <input
              placeholder={"Enter the artist of the song"}
              onChange={(e) => setSongDetail("artist", e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>{spotify ? "Spotify Song ID" : "URL of Youtube Song"}</label>
            <input
              placeholder={spotify ? "eg. " : "eg."}
              onChange={(e) => setSongDetail("link", e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button.Group>
          <Button onClick={() => handleModal(false)}>Cancel</Button>
          <Button positive onClick={() => createSong()}>
            Create
          </Button>
        </Button.Group>
      </Modal.Actions>
    </Modal>
  );
};

export default CreateSongModal;
