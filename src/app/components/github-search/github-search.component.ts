import { Component, OnInit } from '@angular/core';
import { RequestData } from 'src/app/models/github-search-models';
import { GithubapiService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.sass']
})
export class GithubSearchComponent implements OnInit {
  searchedRepositories: any[];
  noDataMessage: string;
  requestData: RequestData;
  isAdviceChecked: boolean;
  constructor(private githubapiService: GithubapiService) { 
    this.requestData = new RequestData();
  }

  ngOnInit(): void {}

  searchRepositories(): void {
    this.searchedRepositories = [];
    this.noDataMessage = null;
    this.requestData.page = 0;
    this.requestData.perPage = 100;
    this.githubapiService.getRepoByKeyword(this.requestData).subscribe((response: any) => {
      this.searchedRepositories = response;
      console.log(this.searchedRepositories);
    });
  }
}
