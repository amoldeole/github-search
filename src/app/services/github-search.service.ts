import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RequestData } from '../models/github-search-models';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {
  constructor(private http: HttpClient) { }

  /** 
   * GET random advice slip from the server
   * 
   * @returns Observable
   */
  getRepoByKeyword(reqData: RequestData): Observable<any> {
    const url = `${environment.base_url}/repositories?per_page=${reqData.perPage ? reqData.perPage: 10}&q=${reqData.keyword}&page=${reqData.page}`;
    return this.http.get<any>(url);
  }
}
