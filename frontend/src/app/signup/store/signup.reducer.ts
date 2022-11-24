import { RegisterRes } from "src/app/communComponents/signup.model";
import * as SignupActions from "./signup.actions";

export interface signupState {
  registerRes: RegisterRes | null;
  signupError: string | null;
  signupSuccess: string | null;
  loading: boolean;
}

const initialState: signupState = {
  registerRes: null,
  signupError: null,
  signupSuccess: null,
  loading: false,
};

export function signupReducer(
  state: signupState = initialState,
  action: SignupActions.SignupActions
): signupState {
  switch (action.type) {
    case SignupActions.SIGNUP:
      return {
        ...state,
        signupError: null,
        signupSuccess: null,
        registerRes: action.payload,
        loading: false,
      };

    case SignupActions.SIGNUP_START:
      return {
        ...state,
        signupError: null,
        signupSuccess: null,
        loading: true,
      };
    case SignupActions.SIGNUP_FAIL:
      return {
        ...state,
        registerRes: null,
        signupSuccess: null,
        signupError: action.payload,
        loading: false,
      };
    case SignupActions.SIGNUP_SUCCESS:
      return {
        ...state,
        registerRes: null,
        signupSuccess: action.payload,
        signupError: null,
        loading: false,
      };
    default:
      return state;
  }
}
