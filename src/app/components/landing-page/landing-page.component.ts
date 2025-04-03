import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { TextSliderComponent } from '../text-slider/text-slider.component';
import { TextSliderTwoComponent } from '../text-slider-two/text-slider-two.component';

@Component({
  selector: 'app-landing-page',
  imports: [SliderComponent, TextSliderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  // @ViewChild('video', { static: false }) landingPage!: ElementRef;
  @ViewChild('video', { static: false }) video!: ElementRef;

  ngAfterViewInit(): void {
    this.video.nativeElement.muted = true;
    this.video.nativeElement.play();
    console.log('%c', 'background: url(https://i.imgur.com/2v2v2v2.png); color: transparent; font-size: 100px; padding: 100px;');
    console.log(this.video.nativeElement);

  }

}
