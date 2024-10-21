import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { map } from "rxjs";

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) { }

  getUserProfile(id: string) {
    return this.http.get(`${environment.apiUrl}/api/user/${id}`)
      .pipe(map((v: any) => { console.log('v', v); return v.data }));
  }
}