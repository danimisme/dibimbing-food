import modalDeleteShowReducer from "./reducers/ModalDeleteReducer";

const { combineReducers, createStore } = require("redux");
const { default: modalShowReducer } = require("./reducers/ModalShowReducers");

const rootReducer = combineReducers({
  modalShow: modalShowReducer,
  modalDelete: modalDeleteShowReducer,
});

const store = createStore(rootReducer);

export default store;
