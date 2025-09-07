import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingBusinessBlockComponent } from './helping-business-block.component';

describe('HelpingBusinessBlockComponent', () => {
  let component: HelpingBusinessBlockComponent;
  let fixture: ComponentFixture<HelpingBusinessBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpingBusinessBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpingBusinessBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
