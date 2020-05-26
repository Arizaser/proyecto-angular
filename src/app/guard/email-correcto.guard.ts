import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';
import { map } from 'rxjs/operators';
import { GLOBAL } from 'src/services/global';

@Injectable({
  providedIn: 'root'
})
export class EmailCorrectoGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {

  }


  canActivate(): Observable<boolean> {
    return this.authService.isLogged().pipe(map(user => {
      if (user && /^[A-Za-z]+\d+[A-Za-z]+@iesgrancapitan.org$/.test(user.email)) {
        GLOBAL.noVerificado = false;
        return true;
      }
      else {
        GLOBAL.noVerificado = true;
        this.router.navigate(['/login']);
        this.authService.logout();
      }
    }));
  }

}
