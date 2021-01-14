import { RegionType } from "./types";
import { createStoreCtx } from "../utils";

type StateType = {
  regions: Array<RegionType> | null;
  isLoadingRegions: boolean;
};
type AppState = typeof initialState;
type Action = { type: "LOAD_REGIONS"; payload: Array<RegionType> };

const initialState: StateType = { regions: null, isLoadingRegions: true };

const { store, StoreProvider } = createStoreCtx(
  (_state: AppState, action: Action): AppState => {
    switch (action.type) {
      case "LOAD_REGIONS":
        return {
          regions: action.payload,
          isLoadingRegions: false,
        };
      default:
        throw new Error();
    }
  },
  initialState
);

export { store, StoreProvider };
