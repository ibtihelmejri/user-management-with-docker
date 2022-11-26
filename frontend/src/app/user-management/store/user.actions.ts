import { Action } from "@ngrx/store";
import { UserModel } from "../user.model";
// import {UserResModel} from "../../communComponents/user_res.model";

export const GET_USERS = "[User management] Users List";
export const ACTION_FAIL = "[User management] Failed to get list";
export const ACTION_SUCCESS = "[User management] Get  list with success";
export const ADD_USER = "[User management] Add Users ";
export const IS_SUCCESS = "[User management] Add Users with success ";

export class GetUsers implements Action {
  readonly type = GET_USERS;

  constructor() {}
}

export class ActionFail implements Action {
  readonly type = ACTION_FAIL;

  constructor(public payload: string) {}
}

export class ActionSuccess implements Action {
  readonly type = ACTION_SUCCESS;

  constructor(public payload: UserModel[]) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(
    public payload: {
      avatar: string;
      email: string;
      firstname: string;
      lastname: string;
      job: string;
    }
  ) {}
}
export class IsSuccess implements Action {
  readonly type = IS_SUCCESS;

  constructor(
    public payload: {
      avatar: string;
      email: string;
      firstname: string;
      lastname: string;
      job: string;
      id: string;
    }
  ) {}
}

export type UserActions =
  | GetUsers
  | ActionFail
  | ActionSuccess
  | IsSuccess
  | AddUser;
