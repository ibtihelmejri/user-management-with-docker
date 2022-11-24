import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../communComponents/shared.module";
import { NavbarComponent } from "../navbar/navbar.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserItemComponent } from "./user-list/user-item/user-item.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserManagementComponent } from "./user-management.component";

@NgModule({
  declarations: [
    UserManagementComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent,
    NavbarComponent,
  ],
  exports:[
    UserManagementComponent,
    UserDetailsComponent,
    UserListComponent,
    UserItemComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: "", component: UserManagementComponent, children:[
        {path:'', component: UserListComponent},
        {path:':id/details', component: UserDetailsComponent}
      ] },
    ]),
    SharedModule,
  ],
})
export class UserModule {}
