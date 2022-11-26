import { UserModel } from "../user.model";
import * as UserActions from "./user.actions";

export interface userState {
  users: UserModel[];
  messageError: string | null;
  messageSuccess: string | null;
  loading: boolean;
}

const initialState: userState = {
  users: [],
  messageError: null,
  messageSuccess: null,
  loading: false,
};

export function userReducer(
  state: userState = initialState,
  action: UserActions.UserActions
): userState {
  switch (action.type) {
    case UserActions.ACTION_SUCCESS:
      
      return {
        ...state,
         users: action.payload,
      };
    case UserActions.IS_SUCCESS:
      return {
        ...state,
        messageError: null,
        messageSuccess: "L'ajout a été effectuée avec succès",
        loading:false,
        users:[action.payload, ...state.users]

      };

    case UserActions.ACTION_FAIL:
      return {
        ...state,
        messageSuccess: null,
        messageError: action.payload,
        loading:false

      };

      case UserActions.ADD_USER:
      return {
        ...state,
        messageSuccess: null,
        messageError: null,
        loading:true
      };


    default:
      return state;
  }
}
