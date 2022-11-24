import { Injectable } from "@angular/core";
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from "@angular/common/http";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem("OOPgtd563");

    if (!token) {
      return next.handle(req);
    }
    const modifiedReq = req.clone({
      params: new HttpParams().set("auth", token),
    });
    return next.handle(modifiedReq);
  }
}
