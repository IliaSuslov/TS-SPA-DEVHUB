import { AddUser, RemoveUser, GetUser } from "./actionCreators";

const initialState: IStore = {
  headers: [],
  users: [],
  loading: true,
  modal: false,
  user: [],
  item: {},
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "PUSH_DATA_TO_STORE":
      return {
        ...state,
        ...action.data,
        loading: false,
        update: false,
      };
    case "ADD_USER":
      let name: string[] = action.props.names.split(" ").slice(0, 3);
      let newUser: {} = {
        id: Math.floor(Math.random() * 100),
        firstname: name[1],
        middlename: name[2],
        lastname: name[0],
        avatar: action.props.avatar,
        email: action.props.email,
        phone: action.props.phone,
      };
      AddUser(newUser, action.props.d);
      return { ...state, modal: false, user: [], update: true };
    case "SWITCH_ADD_MODAL":
      return {
        ...state,
        modal: !state.modal,
      };
    case "REMOVE_USER":
      RemoveUser(action.props.id, action.props.d);
      return {
        ...state,
        update: true,
      };
    case "GET_USER":
      let user = GetUser(action.props.id, action.props.d);
      return {
        ...state,
        item: user,
      };
    case "MODAL_CHANGE":
      return {
        ...state,
        user: { ...state.user, ...action.state },
      };
    default:
      return state;
  }
};

export default reducer;
