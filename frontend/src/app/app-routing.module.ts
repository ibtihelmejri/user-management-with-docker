import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

const appRoutes: Routes = [
  { path: "", redirectTo: "/signin", pathMatch: "full" },
  {
    path: "signin",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupModule),
  },
  {
    path: "user-management",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./user-management/user.module").then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
