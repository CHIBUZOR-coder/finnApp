import { store } from "./app/store.js";

import { fetchUsers } from "./features/User/UserSlice.js";
const unsubscribe = store.subscribe(() => {
  //   console.log("updated state", store.getState());
  console.log(JSON.stringify(store.getState(), null, 2));
});

store.dispatch(fetchUsers());
