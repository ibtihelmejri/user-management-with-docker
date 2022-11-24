

import * as fromAuth from '../auth/store/auth.reducer';
import * as fromSignup from '../signup/store/signup.reducer';
import * as fromUser from '../user-management/store/user.reducer'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  auth: fromAuth.authState;
  signup: fromSignup.signupState;
  user: fromUser.userState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  auth: fromAuth.authReducer,
  signup : fromSignup.signupReducer,
  user: fromUser.userReducer
};


