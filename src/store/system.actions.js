import { store } from "./store";
import { CREATING_DONE, CREATING_START } from "./system.reducer";

export function StartCreating() {
  store.dispatch({ type: CREATING_START });
}
export function StopCreating() {
    store.dispatch({ type: CREATING_DONE });
  }