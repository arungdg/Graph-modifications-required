import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HomeService {
    url: any;
    constructor(private http: HttpClient) {
    }
    Buy() {
         this.url = 'http://localhost:3000/route';
    console.log('this method call');
    return this.http.get(this.url);
    }
}
