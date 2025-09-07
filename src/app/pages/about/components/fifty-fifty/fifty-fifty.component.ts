import { Component } from '@angular/core';
import { FiftyFiftyReusableComponent } from "../../../../shared/components/fifty-fifty-reusable/fifty-fifty-reusable.component";
import { FiftyFifty } from '../../../../shared/types/fifty-fifty-type';

@Component({
  selector: 'app-fifty-fifty',
  imports: [FiftyFiftyReusableComponent],
  templateUrl: './fifty-fifty.component.html',
  styleUrl: './fifty-fifty.component.scss'
})
export class FiftyFiftyComponent {
aboutFiftyFifty:FiftyFifty = {
  image:'images/progress-banner.avif',
  topTitle:'Business Level',
  bigTitle:'Advance your small business to the next level of success.',
  description:'Unlock new opportunities and drive sustainable growth for your small business.',
  progressBar:[{
    title:'Client Satisfaction',
    width:95
  },
  {
    title:'Project Success Rate',
    width:90
  },
  {
    title:'Client Retention Ratio',
    width:92
  },
]
}
}
