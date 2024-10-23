import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["isOpenLoginModal"],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store);
let storePersistor = { store, persistor };

export default storePersistor;
