import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import * as AuthActions from "./auth.actions";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

export interface AuthResponseData {
  accessToken: string;
}
const optionRequete = {
  headers: new HttpHeaders({ 
    "Access-Control-Allow-Origin": "*",
  })
};
@Injectable()
export class AuthEffects {

  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.http
          .post<AuthResponseData>("http://localhost:3000/api/login",{
            email: authData.payload.email,
            password: authData.payload.password,
          })
          .pipe(
            map((resData) => {              
              localStorage.setItem("OOPgtd563", resData.accessToken);
              return new AuthActions.OnLogin({
                token: resData.accessToken,
              });
            }),
            catchError((errorRes) => {

              let errorMessage =
                "Une erreur est survenue, merci de réessayer plus tard";
              if (!errorRes.error || !errorRes.error.error) {
                return of(new AuthActions.LoginFail(errorMessage));
              }

              switch (errorRes.error.error) {
                case "user not found":
                  errorMessage = ` Utilisateur non trouvé. Merci de taper l'adresse mail suivante: eve.holt@reqres.in `;
                  break;
                case "Note: Only defined users succeed registration":
                  errorMessage =
                    "Remarque : Seuls les utilisateurs définis réussissent l'enregistrement";
                  break;
              }

              return of(new AuthActions.LoginFail(errorMessage));
            })
          );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
