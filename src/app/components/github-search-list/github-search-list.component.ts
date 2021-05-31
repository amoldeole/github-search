import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search-list',
  templateUrl: './github-search-list.component.html',
  styleUrls: ['./github-search-list.component.sass']
})
export class GithubSearchListComponent implements OnInit {
  @Input() searchedList: any;
  @Input() noDataMessage: string;
  constructor() { }
  ngOnInit(): void {}
}
