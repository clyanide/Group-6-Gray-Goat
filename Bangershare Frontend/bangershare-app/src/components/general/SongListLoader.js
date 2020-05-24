import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";

import Skeleton from "@material-ui/lab/Skeleton";

const SongListLoader = (props) => {
  const { int } = props;
  return (
    <List>
      {[...Array(int)].map(() => (
        <ListItem style={{ paddingLeft: "30px" }}>
          <ListItemIcon>
            <Skeleton variant="circle" width={40} height={40} />
          </ListItemIcon>
          <ListItemText
            style={{ paddingLefft: "30px" }}
            primary={<Skeleton variant="text" height={15} width="280px" />}
            secondary={
              <Skeleton
                style={{ marginTop: "5px" }}
                variant="text"
                height={10}
                width="120px"
              />
            }
          />
          <ListItemSecondaryAction style={{ paddingRight: "15px" }}>
            <Skeleton variant="circle" height={25} width={25} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default SongListLoader;
