import { Injectable, signal } from '@angular/core';

import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activePermission = signal<Permission>('guest');

  authenticate(email: string, password: string) {
    if (email === 'admin' && password === 'admin') {
      this.activePermission.set('admin');
    } else if (email === 'user' && password === 'user') {
      this.activePermission.set('user');
    } else {
      this.activePermission.set('guest');
    }
  }

  logout() {
    this.activePermission.set('guest');
  }
}
