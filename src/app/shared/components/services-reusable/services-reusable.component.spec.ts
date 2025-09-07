import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesReusableComponent } from './services-reusable.component';

describe('ServicesReusableComponent', () => {
  let component: ServicesReusableComponent;
  let fixture: ComponentFixture<ServicesReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
