import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./communComponents/shared.module";
import { SignupModule } from "./signup/signup.module";
import { appReducer } from "./store/app.reducer";
import { AuthEffects } from "./auth/store/auth.effects";
import { SignupEffects } from "./signup/store/signup.effects";
import { environment } from "../environments/environment";
import { UserEffects } from "./user-management/store/user.effects";
import { UserModule } from "./user-management/user.module";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth.guard";
import { AuthInterceptorService } from "./auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects, SignupEffects, UserEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    FormsModule,
    AuthModule,
    SharedModule,
    SignupModule,
    UserModule
  ],
  providers: [AuthService,AuthGuard, {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
