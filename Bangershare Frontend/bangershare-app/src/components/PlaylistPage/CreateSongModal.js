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

    var x = document.getElementById("btn");

    if (!spotify) {
      x.style.marginLeft = "100px";
    } else {
      x.style.marginLeft = "0px";
    }
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
        width: "35vw",
        height: "55vh",
        flex: 9,
      }}
    >
      <div style={{ paddingTop: "1vh" }}>
        <h2>Add a song</h2>
      </div>
      <div style={{ paddingTop: "2vh" }}>
        <ButtonGroup  color="primary"
          variant="contained"
          style={{
            width: "100%",
            maxWidth: "200px",
            borderRadius: "30px",
          }}>
        <div
            style={{
              width: "100%",
              maxWidth: "200px",
              textAlign: "center",
            }}
          >
            <div
              id="btn"
              style={{
                position: "absolute",
                width: "100px",
                height: "40px",
                background: "linear-gradient(to right, #7d12ff, #5E35B1)",
                borderRadius: "30px",
                transition: ".5s",
              }}
            ></div>
          <Button
            disabled={!spotify}
            onClick={() => {
              toggleSpotify();
              setSongDetail("songType", 2);
            }}
            color="primary"
            style={{
              width: "50%",
              padding: "10px 30px",
              borderRadius: "30px",
              color: "#FFFFFF"
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
            color="primary"
            style={{
              width: "50%",
              padding: "10px 30px",
              borderRadius: "30px",
              color: "#FFFFFF"
            }}
          >
            Spotify
          </Button>
          </div>
        </ButtonGroup>
      </div>
      <div style={{ width: "100%" }}>
        {!spotify ? (
          <div style={{ flex: 6 }}>
            <div style={{ flex: 2, marginLeft: "20%", paddingTop: "2vh" }}>
              <h4>Song Name</h4>
              <form>
                <TextField
                  label="Enter a name of a song"
                  variant="outlined"
                  onChange={(e) => setSongDetail("name", e.target.value)}
                  style={{ width: "80%" }}
                />
              </form>
            </div>
            <div style={{ flex: 2, marginLeft: "20%", paddingTop: "2vh" }}>
              <h4>Artist Name</h4>
              <form>
                <TextField
                  label="Enter the name of the artist"
                  variant="outlined"
                  onChange={(e) => setSongDetail("artist", e.target.value)}
                  style={{ width: "80%" }}
                />
              </form>
            </div>
            <div style={{ flex: 2, marginLeft: "20%", paddingTop: "2vh" }}>
              <h4>Youtube URL</h4>
              <form>
                <TextField
                  label="e.g. https://www.youtube.com/watch?v=S0twBO8l3pI"
                  variant="outlined"
                  onChange={(e) => setSongDetail("link", e.target.value)}
                  style={{ width: "80%" }}
                />
              </form>
            </div>
          </div>
        ) : (
          <div style={{ flex: 6, marginLeft: "20%", paddingTop: "2vh" }}>
            <h4>Spotify Song ID</h4>
            <form>
              <TextField
                label="e.g. https://open.spotify.com/track/3c7peg169veVaJRzlbCaKw"
                variant="outlined"
                onChange={(e) => setSongDetail("link", e.target.value)}
                style={{ width: "80%" }}
              />
            </form>
          </div>
        )}
      </div>
      <div style={{ flex: 1, paddingTop: "2vh" }}>
        <ButtonGroup>
          <Button onClick={() => handleModal(false)}>Cancel</Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => createSong()}
          >
            Create
          </Button>
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
          width: "35vw",
          height: "55vh",
          position: "absolute",
          left: "32.5vw",
          top: "20vh",
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
