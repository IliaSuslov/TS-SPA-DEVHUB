import reducer from "./reducer";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";

const composedEnhancer = applyMiddleware(thunk);

const store: Store<UserState> = createStore(reducer, composedEnhancer);

export default store;
