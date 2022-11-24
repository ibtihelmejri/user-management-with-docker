import { Action } from "@ngrx/store";
import { RegisterRes } from "src/app/communComponents/signup.model";

export const SIGNUP_START = "[Auth] Signup Start";
export const SIGNUP = "[Auth] Signup";
export const SIGNUP_FAIL = "[Auth] Signup Fail";
export const SIGNUP_SUCCESS = "[Auth] Signup Success";

export class Signup implements Action {
  readonly type = SIGNUP;

  constructor(public payload: RegisterRes) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class SignupFail implements Action {
  readonly type = SIGNUP_FAIL;

  constructor(public payload: string) {}
}

export class signupSuccess implements Action {
  readonly type = SIGNUP_SUCCESS;

  constructor(public payload: string) {}
}
export type SignupActions = Signup | SignupStart | SignupFail | signupSuccess;
