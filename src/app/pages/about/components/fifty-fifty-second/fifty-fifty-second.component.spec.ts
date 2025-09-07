import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFiftySecondComponent } from './fifty-fifty-second.component';

describe('FiftyFiftySecondComponent', () => {
  let component: FiftyFiftySecondComponent;
  let fixture: ComponentFixture<FiftyFiftySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiftyFiftySecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiftyFiftySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
