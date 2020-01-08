import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private router: Router, private http: HttpClient) { }

  getall(url): Observable<any> {
    return this.http.get(url);
  }
  getdetails(url): Observable<any> {
    return this.http.get(url);
  }
}
