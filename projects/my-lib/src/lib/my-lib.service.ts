import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SplunkConfiguration } from './my-lib.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor(
    @Inject('config') private config: SplunkConfiguration,
    private http: HttpClient
  ) {}

  getSomethingCool(): Observable<TheThing> {
    console.log(this.config);

    return this.http.get(
      'http://www.boredapi.com/api/activity?type=recreational'
    );
  }
}

export class TheThing {
  activity?: string;
  accessibility?: string;
  type?: string;
  participants?: number;
  price?: number;
  key?: string;
}
