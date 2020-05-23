import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const SearchList = (props) => {
  const { onClickUser, userList } = props;
  return (
    <>
      {userList && userList.length > 0 ? (
        <Autocomplete
          style={{
            width: "90%",
            marginLeft: "3vw",
          }}
          clearOnBlur
          openOnFocus={false}
          clearOnEscape={true}
          onChange={(event, value) =>
            value !== null ? onClickUser(value) : null
          }
          options={userList.filter(
            (user) => user !== localStorage.getItem("username")
          )}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for other users"
              margin="normal"
              variant="outlined"
            />
          )}
        />
      ) : null}
    </>
  );
};

export default SearchList;
