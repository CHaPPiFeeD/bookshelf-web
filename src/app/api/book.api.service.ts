import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class BookApiService {
  constructor(
    private http: HttpClient,
  ) {
    console.log(environment.apiUrl);
    
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/books`);
  }

  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/books/${id}`);
  }
}