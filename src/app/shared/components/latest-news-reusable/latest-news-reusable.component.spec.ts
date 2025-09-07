import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsReusableComponent } from './latest-news-reusable.component';

describe('LatestNewsComponent', () => {
  let component: LatestNewsReusableComponent;
  let fixture: ComponentFixture<LatestNewsReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
