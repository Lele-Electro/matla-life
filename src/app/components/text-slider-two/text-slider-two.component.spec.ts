import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSliderTwoComponent } from './text-slider-two.component';

describe('TextSliderTwoComponent', () => {
  let component: TextSliderTwoComponent;
  let fixture: ComponentFixture<TextSliderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSliderTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
