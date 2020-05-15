import { actionType } from "../actions/Color";
import { catchError, filter, mergeMap } from "rxjs/operators";
import axios from "axios";

export const getColor = (action$, store) =>
  action$.pipe(
    filter((action) => action.type === actionType.GET_COLOR),
    mergeMap(async (action) => {
      const color = await axios
        .get("http://www.colr.org/json/color/random")
        .then((res) => {
          return "#" + res.data.new_color;
        });

      return { type: actionType.GET_COLOR_SUCCESS, color };
    })
  );
