import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from './global';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  public url: string;


  constructor(
    private _http:HttpClient,
    public authService:AuthService,
  ) {
    this.url = GLOBAL.url2;
  }

  getNoticia(){
    return this._http.get(this.url+"/noticiasv2")
    .pipe(map(res => res));
  }
}
