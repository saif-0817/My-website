import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFiftyReusableComponent } from './fifty-fifty-reusable.component';

describe('FiftyFiftyReusableComponent', () => {
  let component: FiftyFiftyReusableComponent;
  let fixture: ComponentFixture<FiftyFiftyReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiftyFiftyReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiftyFiftyReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
