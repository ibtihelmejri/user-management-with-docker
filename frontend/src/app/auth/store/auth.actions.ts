import { Action } from "@ngrx/store";
import { AuthToken } from "src/app/communComponents/auth.model";

export const LOGIN_START = "[Auth] Login Start";
export const LOGIN = "[Auth] Login";
export const LOGIN_FAIL = "[Auth] Login Fail";

export class OnLogin implements Action {
  readonly type = LOGIN;

  constructor(public payload: AuthToken) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export type AuthActions = OnLogin | LoginStart | LoginFail;
