import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): boolean {
    return email === 'test@example.com' && password === '123456';
  }

  register(email: string, password: string): boolean {
    return true;
  }
}
