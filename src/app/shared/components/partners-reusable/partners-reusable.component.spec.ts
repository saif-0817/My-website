import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersReusableComponent } from './partners-reusable.component';

describe('PartnersReusableComponent', () => {
  let component: PartnersReusableComponent;
  let fixture: ComponentFixture<PartnersReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
