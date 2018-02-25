import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { debounceTime, distinctUntilChanged, switchMap, map, filter, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';



@Injectable()
export class SearchService {
  baseUrl = './../assets/name-api.json';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {

    // TODO: Don't send an API request for every change in the input string
    // Discard series of input characters that take less than the 400-500ms
    // Finally, if the user keeps typing, discard the previous observable and use the new one
  }

  searchEntries(term) {

    // TODO: Filter on the first_name or last_name property of the fn(event)
    // that matches the search term
  }

}
