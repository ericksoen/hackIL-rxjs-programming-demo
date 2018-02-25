import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchTerm = new Subject<string>();
  public results: Object;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.search(this.searchTerm).subscribe(results => this.results = results);
  }

}
