// import zustand (an installed packaged)
import create from "zustand";
import { devtools, redux } from "zustand/middleware";

// initial state
const initialState = {
  color: "#ccd7f6",
  count: 0,
};

// actions
export const COLOR = "COLOR";
export const COUNT = "COUNT";

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case COLOR:
      return { color: action.payload };

    case COUNT:
      return { count: action.payload };

    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)));
