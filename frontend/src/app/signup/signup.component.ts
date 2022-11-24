import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import * as SignupActions from "./store/signup.actions";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  @ViewChild("signupForm") signupForm: NgForm | undefined;
  constructor(private store: Store<fromApp.AppState>) {}
  isSuccess = false;
  isFailed = false;
  isLoading = false;
  error: string = "";
  success: string = "";
  showPassword = true;
  type="password";

  ngOnInit(): void {
    this.store.select("signup").subscribe((signupState) => {
      this.isLoading = signupState.loading;
      this.error = signupState.signupError!;
      this.success = signupState.signupSuccess!;

      if (this.error) {
        this.isFailed = true;
        setTimeout(() => {
          this.isFailed = false;
        }, 4000);
      }
      if (this.success) {
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 4000);
      }
    });
  }

  onSubmit() {
    const email = this.signupForm?.form.value.email;
    const password = this.signupForm?.form.value.password;
    this.isLoading = true;

    this.store.dispatch(
      new SignupActions.SignupStart({ email: email, password: password })
    );
    this.signupForm?.form.reset();
  }
  onShow(){
    this.showPassword = !this.showPassword;
    this.type = !this.showPassword ? 'text' : 'password';
    
  }
}
