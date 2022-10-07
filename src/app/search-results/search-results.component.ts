import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../shared/services/search-history.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  history: string[] = [];
  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit(): void {
    this.history = this.searchHistoryService.getHistory();
    this.searchHistoryService.searchHistoryUpdated.subscribe((historyArray: string[]) => {
      this.history = historyArray;
    })
  }



}
