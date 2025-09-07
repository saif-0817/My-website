import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFiftyComponent } from './fifty-fifty.component';

describe('FiftyFiftyComponent', () => {
  let component: FiftyFiftyComponent;
  let fixture: ComponentFixture<FiftyFiftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiftyFiftyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiftyFiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
