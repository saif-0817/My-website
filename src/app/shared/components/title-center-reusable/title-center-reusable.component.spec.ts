import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCenterReusableComponent } from './title-center-reusable.component';

describe('TitleCenterReusableComponent', () => {
  let component: TitleCenterReusableComponent;
  let fixture: ComponentFixture<TitleCenterReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCenterReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCenterReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
