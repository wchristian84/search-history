import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SearchHistoryService {
  private searchHistory: string[] = [];
  searchHistoryUpdated = new EventEmitter<string[]>();

  getHistory() {
    return this.searchHistory.slice();
  }

  addSearchTerm (term: string) {
    this.searchHistory.push(term);
    this.searchHistoryUpdated.emit(this.searchHistory.slice());
  }
}
