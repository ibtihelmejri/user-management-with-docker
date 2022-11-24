import { HttpClient } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import * as SignupActions from "./signup.actions";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

export interface SignupResponseData {
  id: number;
  token: string;
}


@Injectable()
export class SignupEffects {
  
  authSignup = createEffect(() =>
    this.actionsSignup$.pipe(
      ofType(SignupActions.SIGNUP_START),
      switchMap((signupData: SignupActions.SignupStart) => {
        return this.http
          .post<SignupResponseData>("http://localhost:3000/api/register", {
            email: signupData.payload.email,
            password: signupData.payload.password,
          })
          .pipe(
            map((resData) => {
              return (
                new SignupActions.Signup({
                  id: resData.id,
                  token: resData.token,
                }),
                new SignupActions.signupSuccess(
                  "La création d'un nouveau compte a été effectuée avec succès"
                )
              );
            }),
            catchError((errorRes) => {
              let errorMessage =
                "Une erreur est survenue, merci de réessayer plus tard";
              if (!errorRes.error || !errorRes.error.error) {
                return of(new SignupActions.SignupFail(errorMessage));
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

              return of(new SignupActions.SignupFail(errorMessage));
            })
          );
      })
    )
  );

  constructor(private actionsSignup$: Actions, private http: HttpClient) {}
}
