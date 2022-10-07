import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../shared/services/search-history.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentSearchTerm: string = '';

  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit(): void {
  }

  addSearchHistory(term: string) {
    this.searchHistoryService.addSearchTerm(term);
  }

}
