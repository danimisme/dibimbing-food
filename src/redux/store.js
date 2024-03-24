const { combineReducers, createStore } = require("redux");
const { default: modalShowReducer } = require("./reducers/ModalShowReducers");

const rootReducer = combineReducers({
  modalShow: modalShowReducer,
});

const store = createStore(rootReducer);

export default store;
