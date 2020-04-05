import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  path = "http://demo8580176.mockable.io/";

  constructor(private httpClient: HttpClient) {
    
  }

  requestWithGet(url: string): Observable<any> {
    return this.httpClient.get(this.path + url).pipe(
      tap(res => {  }),
      catchError( this.handleError )
    );
  }

  handleError(error: HttpErrorResponse){
    let errorMessage = `Error: ${error.status} ${error.statusText}`;
    return throwError(errorMessage);
  }


}
