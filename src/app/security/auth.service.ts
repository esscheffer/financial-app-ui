import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConstants} from "../appConstants";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = `${AppConstants.apiUrl}/oauth/token`;
  tokensRevokeUrl = `${AppConstants.apiUrl}/tokens/revoke`;
  jwtPayload: any;

  constructor(private httpClient: HttpClient,
              private jwtHelper: JwtHelperService,) {
    this.loadToken();
  }

  login(user: string, password: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    const body = `username=${user}&password=${password}&grant_type=password`;

    return this.httpClient.post<any>(this.authUrl, body, {headers, withCredentials: true})
      .toPromise()
      .then(response => this.storeToken(response.access_token))
      .catch(response => {
        if (response.status === 400) {
          const responseError = response.error;
          if (responseError && responseError.error === 'invalid_grant') {
            return Promise.reject('User or password invalid!');
          }
        }

        return Promise.reject(response);
      });
  }

  logout() {
    return this.httpClient.delete(this.tokensRevokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.clearAccessToken();
      });
  }

  clearAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  hasPermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  hasAnyPermission(roles: string[]) {
    return roles.some(role => this.hasPermission(role))
  }

  refreshToken(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    const body = 'grant_type=refresh_token';

    return this.httpClient.post<any>(this.authUrl, body, {headers, withCredentials: true})
      .toPromise()
      .then(response => {
        this.storeToken(response.access_token);
        return Promise.resolve(null);
      })
      .catch(() => {
        return Promise.resolve(null);
      });
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  private storeToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.storeToken(token);
    }
  }
}
