import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchListComponent } from './github-search-list.component';

describe('AdviceListComponent', () => {
  let component: GithubSearchListComponent;
  let fixture: ComponentFixture<GithubSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
