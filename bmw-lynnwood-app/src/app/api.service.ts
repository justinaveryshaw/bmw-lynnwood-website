import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
    // private apiUrl = 'http://localhost:4747/api';
    private apiUrl = '/api';

    // private http: inject(HttpClient);

    constructor(private http: HttpClient) { }

    public getMenuList(): Observable<any> {
        // let responseData;
        return this.http.get(`${this.apiUrl}/filter-menu`);
        // return responseData;
    }    
}
