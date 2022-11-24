import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../communComponents/shared.module";
import { SignupComponent } from "./signup.component";

@NgModule({
  declarations: [SignupComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: SignupComponent }]),
    SharedModule
  ],
})
export class SignupModule {}