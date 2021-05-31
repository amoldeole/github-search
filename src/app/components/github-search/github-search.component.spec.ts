import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GithubSearchComponent } from './github-search.component';

describe('AdviceComponent', () => {
  let component: GithubSearchComponent;
  let fixture: ComponentFixture<GithubSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubSearchComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
