import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

// Ajusta esto a la respuesta real de tu backend
interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly LOGIN_URL = 'http://localhost:3000/auth/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.LOGIN_URL, credentials)
      .pipe(
        tap((res) => {
          // Guarda el "token" o algo que indique sesión iniciada
          const token = res?.token || 'dummy-token';
          localStorage.setItem(this.TOKEN_KEY, token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
