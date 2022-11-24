import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, tap, throwError } from "rxjs";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "../auth/store/auth.actions";

export interface AuthResponseData {
  token: string;
}

export interface SignupResponseData {
  id: number;
  token: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  // signup(email: string, password: string) {
  //   return this.http
  //     .post<SignupResponseData>("https://reqres.in/api/register", {
  //       email: email,
  //       password: password,
  //     })
  //     .pipe(
  //       catchError(this.handleError),
  //       tap((resData) => {
  //         this.store.dispatch(
  //           new AuthActions.OnLogin({
  //             token: resData.token,
  //           })
  //         );
  //         localStorage.setItem("kj128lio", resData.token);
  //       })
  //     );
  // }

  // onLogin(email: string, password: string) {
  //   return this.http
  //     .post<AuthResponseData>("https://reqres.in/api/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .pipe(catchError(this.handleError));
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = "Une erreur est survenue, merci de réessayer plus tard";
  //   if (!errorRes.error || !errorRes.error.error) {
  //     return throwError(errorMessage);
  //   }

  //   switch (errorRes.error.error) {
  //     case "user not found":
  //       errorMessage = ` Utilisateur non trouvé. Merci de taper l'adresse mail suivante: eve.holt@reqres.in `;
  //       break;
  //     case "Note: Only defined users succeed registration":
  //       errorMessage =
  //         "Remarque : Seuls les utilisateurs définis réussissent l'enregistrement";
  //       break;
  //   }

  //   return throwError(errorMessage);
  // }

  loggedIn() {
    return !!localStorage.getItem("OOPgtd563");
  }
}
