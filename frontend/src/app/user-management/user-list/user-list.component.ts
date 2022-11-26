import { Component, OnInit, ViewChild } from "@angular/core";
import { UserModel } from "../user.model";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as UserActions from "../store/user.actions";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  @ViewChild("userForm") userForm: NgForm | undefined;
  @ViewChild("myModalClose") modalClose: any;
  users: UserModel[] = [];
  isSuccess = false;
  isFailed = false;
  isLoading = false;
  error: string = "";
  success: string = "";

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select("user").subscribe((userState) => {
      this.users = userState.users;
      this.isLoading = userState.loading;
      this.error = userState.messageError!;
      this.success = userState.messageSuccess!;
      if (this.error) {
        this.isFailed = true;
        setTimeout(() => {
          this.isFailed = false;
          this.userForm?.form.reset();
          this.modalClose.nativeElement.click();
        }, 4000);
      }
      if (this.success) {
        this.isSuccess = true;
        setTimeout(() => {
          this.isSuccess = false;
          this.userForm?.form.reset();
          this.modalClose.nativeElement.click();
        }, 4000);
      }
    });
  }

  onUserSelected(user: UserModel) {
    this.router.navigate([`user-management/${user.id}/details`]);
  }
  onSubmit() {
    const firstname = this.userForm?.form.value.firstname;
    const lastname = this.userForm?.form.value.lastname;
    const job = this.userForm?.form.value.job;
    const email = this.userForm?.form.value.email;

    this.store.dispatch(
      new UserActions.AddUser({ avatar: "", email: email, firstname: firstname, lastname: lastname, job: job })
    );
  }

  cancel() {
    this.userForm?.form.reset();
  }
}
