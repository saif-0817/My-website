import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReusableComponent } from './button-reusable.component';

describe('ButtonReusableComponent', () => {
  let component: ButtonReusableComponent;
  let fixture: ComponentFixture<ButtonReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
