import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Login{
  email_usuario: string,
  contrasena_usuario: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient) { }

  Login(credentials : any):Observable<any>{
    return this.http.post<any>('http://localhost/engine/funciones/login.php', credentials).pipe();
  }

}
