import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CountDownService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCountDowns(): Observable<String> {
    console.log(this.apiUrl)
    return this.http.get<string>(`${this.apiUrl}/countdown`);
  }
}
