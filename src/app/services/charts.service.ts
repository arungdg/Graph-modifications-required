import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ChartsService {

  constructor(
    private http: HttpClient) {
  }

  getJSON(date, slot): Observable<any> {

    // tslint:disable-next-line:max-line-length
    return this.http.get('https://ontrack-zuul.stackroute.io/delivery-manager/api/v1/routes' + "?" + "date=" + date + "&" + "slotType=" + slot);
  }
}





