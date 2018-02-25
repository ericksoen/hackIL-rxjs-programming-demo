import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap, map, filter, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';



@Injectable()
export class SearchService {
  baseUrl = './../assets/name-api.json';
  queryUrl = '?search=';
  constructor(private http: Http) { }

  search(terms: Observable<string>) {

    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    );
  }

  searchEntries(term) {
    return this.http.get(
      this.baseUrl
    ).pipe(
      map(res => res.json().filter(function(event) {
        return event.first_name.toLowerCase().indexOf(term) !== -1 || event.last_name.toLowerCase().indexOf(term) !== -1;
      }))
    );
  }

}
