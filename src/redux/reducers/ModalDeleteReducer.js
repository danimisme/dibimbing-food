const initialState = {
  modalDeleteShow: false,
};

const modalDeleteShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case "modalDelete/show":
      return { ...state, modalDeleteShow: true };
    case "modalDelete/hide":
      return { ...state, modalDeleteShow: false };
    default:
      return state;
  }
};

export function showModalDelete() {
  return { type: "modalDelete/show" };
}

export function hideModalDelete() {
  return { type: "modalDelete/hide" };
}

export default modalDeleteShowReducer;
