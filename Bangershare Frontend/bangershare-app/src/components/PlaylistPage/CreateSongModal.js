import React, { useState } from "react";
// import { Button, Header, Form, Modal } from "semantic-ui-react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

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
      <div>
        <h2>Add a song</h2>
      </div>
      <div>
        <ButtonGroup>
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
        </ButtonGroup>
      </div>
      <div>
        {!spotify ? (
          <div>
            <div>
              <form>
                <TextField
                  label="Song Name"
                  variant="outlined"
                  onChange={(e) => setSongDetail("name", e.target.value)}
                />
              </form>
            </div>
            <div>
              <form>
                <TextField
                  label="Artist Name"
                  variant="outlined"
                  onChange={(e) => setSongDetail("artist", e.target.value)}
                />
              </form>
            </div>
            <div>
              <form>
                <TextField
                  label="Youtube URL (e.g. https://www.youtube.com/watch?v=S0twBO8l3pI)"
                  variant="outlined"
                  onChange={(e) => setSongDetail("link", e.target.value)}
                />
              </form>
            </div>
          </div>
        ) : (
          <div>
            <form>
              <TextField
                label="Spotify Song ID (e.g. https://open.spotify.com/track/3c7peg169veVaJRzlbCaKw)"
                variant="outlined"
                onChange={(e) => setSongDetail("link", e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      <div>
        <ButtonGroup>
          <Button onClick={() => handleModal(false)}>Cancel</Button>
          <Button onClick={() => createSong()}>Create</Button>
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

    // <Modal open={open} onClose={() => handleModal(false)}>
    //   <Header
    //     icon="music"
    //     content={
    //       <>
    //         Add a song
    //         <Button.Group>
    //           <Button
    //             disabled={!spotify}
    //             onClick={() => {
    //               toggleSpotify();
    //               setSongDetail("songType", 2);
    //             }}
    //           >
    //             Youtube
    //           </Button>
    //           <Button
    //             disabled={spotify}
    //             onClick={() => {
    //               toggleSpotify();
    //               setSongDetail("songType", 0);
    //             }}
    //           >
    //             Spotify
    //           </Button>
    //         </Button.Group>
    //       </>
    //     }
    //   />
    //   <Modal.Content>
    //     <Form>
    //       {!spotify ? (
    //         <>
    //           <Form.Field>
    //             <label>Song name</label>
    //             <input
    //               placeholder={"Enter a name of a song"}
    //               onChange={(e) => setSongDetail("name", e.target.value)}
    //             />
    //           </Form.Field>
    //           <Form.Field>
    //             <label>Artist Name</label>
    //             <input
    //               placeholder={"Enter the artist of the song"}
    //               onChange={(e) => setSongDetail("artist", e.target.value)}
    //             />
    //           </Form.Field>
    //           <Form.Field>
    //             <label>{"URL of Youtube Song"}</label>
    //             <input
    //               placeholder={
    //                 'e.g. "https://www.youtube.com/watch?v=S0twBO8l3pI"'
    //               }
    //               onChange={(e) => setSongDetail("link", e.target.value)}
    //             />
    //           </Form.Field>
    //         </>
    //       ) : (
    //         <Form.Field>
    //           <label>{"Spotify Song ID"}</label>
    //           <input
    //             placeholder={
    //               'e.g. "https://open.spotify.com/track/3c7peg169veVaJRzlbCaKw"'
    //             }
    //             onChange={(e) => setSongDetail("link", e.target.value)}
    //           />
    //         </Form.Field>
    //       )}
    //     </Form>
    //   </Modal.Content>
    //   <Modal.Actions>
    //     <Button.Group>
    //       <Button onClick={() => handleModal(false)}>Cancel</Button>
    //       <Button positive onClick={() => createSong()}>
    //         Create
    //       </Button>
    //     </Button.Group>
    //   </Modal.Actions>
    // </Modal>
  );
};

export default CreateSongModal;
