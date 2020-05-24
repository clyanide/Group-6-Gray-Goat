import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import Error from "./Error.jpg";

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          variant="outlined"
          elevation={2}
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20vh",
            maxWidth: "1000px",
            width: "100%",
            height: "500px",
          }}
        >
          <div className="App">
            <Grid container direction="row" spacing={3}>
              <Grid
                container
                item
                xs={6}
                direction="column"
                style={{ paddingLeft: "30px" }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: "70px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      textAlign: "left",
                      marginLeft: "40px",
                    }}
                  >
                    Oops!
                  </h1>
                </div>
                <div>
                  <h2
                    style={{
                      fontWeight: "lighter",
                      textAlign: "left",
                      marginLeft: "40px",
                    }}
                  >
                    You seem to have lost your way :c
                  </h2>
                </div>
                <div>
                  <h2
                    style={{
                      marginBottom: "20px",
                      fontWeight: "lighter",
                      textAlign: "left",
                      marginLeft: "40px",
                    }}
                  >
                    Don't feel bad, it happens to everyone.
                  </h2>
                </div>
                <div>
                  <h2
                    style={{
                      marginBottom: "20px",
                      fontWeight: "lighter",
                      textAlign: "left",
                      marginLeft: "40px",
                    }}
                  >
                    Here is a picture of our dear friend Yin Wang when he lost
                    his way to the barbershop.
                  </h2>
                </div>
                <div>
                  <h3
                    style={{
                      marginBottom: "20px",
                      fontWeight: "lighter",
                      textAlign: "left",
                      marginLeft: "40px",
                    }}
                  >
                    Error code: <strong>404</strong>
                  </h3>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{
                    marginTop: "5vh",
                    marginRight: "4vw",
                    textAlign: "right",
                  }}
                >
                  <img
                    src={Error}
                    alt="logo"
                    style={{
                      width: "450px",
                      height: "400px",
                      textAlign: "right",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
