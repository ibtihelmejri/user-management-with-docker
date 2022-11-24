import { AuthToken } from "src/app/communComponents/auth.model";
import * as AuthActions from "./auth.actions";

export interface authState {
  authToken: AuthToken | null;
  authError: string | null;
  loading: boolean;
}

const initialState: authState = {
  authToken: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state: authState = initialState,
  action: AuthActions.AuthActions
): authState {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        authError: null,
        authToken: action.payload,
        loading: false,
      };

    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };
    case AuthActions.LOGIN_FAIL:
      return {
        ...state,
        authToken: null,
        authError: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
