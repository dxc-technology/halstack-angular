import { ConfigurationsetupService } from './../startup/configurationsetup.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor, HttpHeaders, HttpResponse, HttpErrorResponse,
  HttpRequest, HttpHandler, HttpEvent, HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { LocalStorageService } from '../../services/localstorage/dxc-localstorage.service';
import { MessageService } from '../toaster/message.service';
import { LoaderService } from '../spinner/loader.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private _localstorage;
  private _logService;
  private _loaderService;
  private _prefixChild = '';
  constructor(
    private http: HttpClient,
    private injector: Injector,
    private _localStorageService: LocalStorageService,
    private config: ConfigurationsetupService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this._loaderService = this.injector.get(LoaderService);
    this._logService = this.injector.get(MessageService);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._prefixChild = this._localStorageService['prefixChild'] != null ? this._localStorageService['prefixChild'] : '';
    if (!request.url.endsWith('.json')) {
      this._loaderService.show();
      this.processRequest();
    }

 if (this.config && this.config.configservice && this.config.configservice.SERVER &&
      Object.values(this.config.configservice.SERVER).findIndex(((
      (x) => { return request.url.startsWith(x); })), request.url) > -1) {
        const header = new HttpHeaders();
        const headerJson = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'bearer ' + this._localStorageService.get(`${this._prefixChild}session`) as string,
          clientId: this._localStorageService.get('clientId') as string
        };
      
        if(this._localStorageService.get('cognito-idToken')) {
        headerJson['cognito-idToken'] = this._localStorageService.get('cognito-idToken');
        }
      
        const headersConfig = new HttpHeaders(headerJson);
    
        request = request.clone({
          headers: headersConfig
        });
    }

    return next.handle(request).pipe(
      tap(ev => {
        let event = (ev as unknown as any);
        if (event.type !== 0 && !request.url.endsWith('.json')) {
          this._loaderService.hide();
          if (event.type === 4 && event['body'] !== undefined && event['body'] !== null
            && event['body'].errors !== undefined && event['body'].errors !== null) {
              event['body'].errors.forEach(err => {
              if (err.type === 2) {
                this._logService.Error(err.message, '');
              }
            });
          }
        } else if (event.type === 2 && !request.url.endsWith('.json')) {
          this._logService.Error(event);
        }
        if (!request.url.endsWith('.json')) {
          try {
            const sessionTimeData = this._localStorageService.get('TimeOutSettings');
            const timeout = (sessionTimeData !== undefined && sessionTimeData != null) ? sessionTimeData[0] :
              this.config.configservice.TIMEOUT;
            const cookieWarningMessage = this.cookieService.get('cookieWarningMessage');
            if (cookieWarningMessage !== undefined) {
              if (parseInt(cookieWarningMessage) < timeout / 2) {
                SetCookie('cookieWarningMessage', timeout - 1, 1);
                this.http.post(this.config.configservice.SERVER.RMUISERVER + '/RMXPortal/AsyncrhonousCallBack.aspx/RenewAuthTicketFromUX', { message: 'Renew Auth Ticket' });
              }
            }
          } catch (ex) {
          }
        }

        if (event instanceof HttpResponse) {
        }
      }, error => {
        if (error instanceof HttpErrorResponse) {
          if (error.url.indexOf('config.json') < 0) {
            // tslint:disable-next-line: no-shadowed-variable
            // const header: string = error.status + ': ' + error.statusText;
            try {
              if (error.error != null && !error.error.hasOwnProperty('message')) {
                const message = error.error.Message === undefined ? error.error : error.error.Message;
                this._loaderService.hide();
                this._logService.Error(message, '');
              } else {
                this._loaderService.hide();
              }
            } catch (ex) {
            }
          }
          if (error.status === 401) {
            this.router.navigate
              (['/logout'], { queryParams: { status: error.status } });
          } else if (error.status === 403) {
            this.router.navigate
              (['/forbidden'], { queryParams: { status: error.status, message: error.error.Message } });
          }
        }
      })
    );
  }

  processRequest = () => {
    try {
      this._prefixChild = this._localStorageService['prefixChild'] != null ? this._localStorageService['prefixChild'] : '';
      const configData = this.config.configservice;
      const newDateTime = new Date().getTime() / 1000;
      const newTime = Math.trunc(newDateTime);
      const currentAccessToken = this._localStorageService.get(`${this._prefixChild}session`) as string;
      const isCognitoAuthentication = this._localStorageService.get('isCognitoAuthentication');
      let injector = this.injector;
      if (currentAccessToken != null && isCognitoAuthentication != null && isCognitoAuthentication == "true") {
        const splitToken = currentAccessToken.split('.');
        const decodeToken = atob(splitToken[1]);
        const tokenObj = JSON.parse(decodeToken);
        const newTimeMin = ((newTime) + (5 * 60));
        let refreshedAccessToken;
        let refreshedIdToken;
        if (newTimeMin > tokenObj.exp && !(this._localStorageService.get('refreshtokenstatus'))) {
          this._localStorageService.set('refreshtokenstatus', true);
          const userpooldata: AmazonCognitoIdentity.ICognitoUserPoolData = {
            UserPoolId: this._localStorageService.get('cognito-UserPoolId'),
            ClientId: this._localStorageService.get('cognito-UserPoolClientId')
          };

          const userPool = new AmazonCognitoIdentity.CognitoUserPool(userpooldata);
          const userData = {
            Username: tokenObj.username,
            Pool: userPool
          };

          const IdToken = new AmazonCognitoIdentity.CognitoIdToken({ IdToken: this._localStorageService.get('cognito-idToken') });
          const AccessToken = new AmazonCognitoIdentity.CognitoAccessToken(
            { AccessToken: this._localStorageService.get('cognito-accesstoken') });
          const tokenData = { IdToken, AccessToken };
          const session = new AmazonCognitoIdentity.CognitoUserSession(tokenData);

          const sessionData = {
            IdToken: this._localStorageService.get('cognito-idToken'),
            AccessToken: this._localStorageService.get('cognito-accesstoken'),
            RefreshToken: this._localStorageService.get('cognito-refreshToken')
          };

          const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
          // cognitoUser.setSignInUserSession = sessionData;
          // cognitoUser.setSignInUserSession = sessionData;
          (cognitoUser as any).signInUserSession = session;

          const refresh_token = new AmazonCognitoIdentity.CognitoRefreshToken({
            RefreshToken: this._localStorageService.get('cognito-refreshToken')
          });
          let vm = this;
          //cognitoUser.refreshSession(refresh_token, (refErr, session) => {
          cognitoUser.refreshSession(refresh_token, function (refErr, session) {
            if (refErr) {
              throw refErr;
            } else {
              const cognitoUserSession = session;
              refreshedIdToken = cognitoUserSession.getIdToken().jwtToken;
              refreshedAccessToken = cognitoUserSession.getAccessToken().jwtToken;

              const config = {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'bearer ' + vm._localStorageService.get(`${this._prefixChild}session`),
                  'clientId': vm._localStorageService.get('clientId'),
                  'IsFromUX': true,
                  'ViewId': vm._localStorageService.get('currentViewId')
                }
              };

              vm.http.post(
                configData.SERVER.RMASERVER + '/refreshcognitotoken',
                {
                  currentRefreshToken:
                    vm._localStorageService.get('cognito-refreshToken'),
                  newAccessToken: refreshedAccessToken,
                  oldAccessToken: vm._localStorageService.get('cognito-accesstoken')
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + vm._localStorageService.get(`${this._prefixChild}session`),
                    'clientId': vm.
                    _localStorageService.get('clientId'),
                    'IsFromUX': 'true',
                    'ViewId': vm._localStorageService.get('currentViewId')
                  }
                }).subscribe
                (function (response) {
                  vm._localStorageService.set('session', refreshedAccessToken);
                  vm._localStorageService.set('cognito-idToken', refreshedIdToken);
                  vm._localStorageService.set('cognito-accesstoken', refreshedAccessToken);
                  vm._localStorageService.set('refreshtokenstatus', false);
                  vm._localStorageService.set('Cognito-RefreshActivity', new Date());
                });
            }
          });

        }
      }
    } catch (ex) {
      console.log('isCognitoAuthentication', ex);
    }
  }

}
function SetCookie(cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie = cookieName + "=" + escape(cookieValue)
    + ";path=/;expires=" + expire['toGMTString']();
}


