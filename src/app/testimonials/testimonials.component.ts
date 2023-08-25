import { Component, Input } from '@angular/core';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  // property binding for carousel to access property of this component (usage: [accessCarousel]="value").
  @Input() accessCarousel: boolean = true;
}
