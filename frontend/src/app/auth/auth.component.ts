import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import * as AuthActions from "./store/auth.actions";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  @ViewChild("authForm") authForm: NgForm | undefined;
  isFailed = false;
  isLoading = false;
  error: string = "";
  showPassword = true;
  type="password";
  constructor(private router: Router, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select("auth").subscribe((authState) => {
      this.isLoading = authState.loading;
      this.error = authState.authError!;
      if (authState.authToken) {
        this.router.navigate(["/user-management"]);
      }

      if (this.error) {
        this.isFailed = true;
        setTimeout(() => {
          this.isFailed = false;
        }, 4000);
      }
    });
  }

  onSubmit() {
    const email = this.authForm?.form.value.email;
    const password = this.authForm?.form.value.password;
    this.isLoading = true;

    this.store.dispatch(
      new AuthActions.LoginStart({ email: email, password: password })
    );
    this.authForm?.form.reset();
  }

  onShow(){
    this.showPassword = !this.showPassword;
    this.type = !this.showPassword ? 'text' : 'password';
    
  }
}
