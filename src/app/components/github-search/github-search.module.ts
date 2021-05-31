import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GithubSearchListComponent } from "../github-search-list/github-search-list.component";
import { AdviceRoutingModule } from "./github-search-routing.module";
import { GithubSearchComponent } from "./github-search.component";

@NgModule({
  declarations: [
    GithubSearchComponent,
    GithubSearchListComponent
  ],
  imports:[AdviceRoutingModule, CommonModule, FormsModule],
  exports: [
    GithubSearchComponent,
    GithubSearchListComponent
  ]
})
export class GithubSearchModule { }
