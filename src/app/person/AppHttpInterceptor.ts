import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {from, Observable} from "rxjs";
import {AuthService} from "../security/auth.service";
import {mergeMap} from "rxjs/operators";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('/oauth/token') && this.auth.isAccessTokenValid()) {

      return from(this.auth.refreshToken())
        .pipe(
          mergeMap(() => {
            req = req.clone({setHeaders: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            return next.handle(req);
          })
        );
    }

    return next.handle(req);
  }
}
