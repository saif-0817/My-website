import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two-column',
  imports: [CommonModule],
  templateUrl: './two-column.component.html',
  styleUrl: './two-column.component.scss'
})
export class TwoColumnComponent {
  advices = [
    {
      id: 1, icon: 'images/arrow_icon.svg', title: 'Strategic Growth Planning', description: 'Tailored strategies to boost your business\'s financial performance.'
    },
    {
      id: 2, icon: 'images/arrow_icon.svg', title: 'Expert Financial Insights', description: 'Access to in-depth analysis and recommendations from industry specialists.'
    },
    {
      id: 3, icon: 'images/arrow_icon.svg', title: 'Optimized Investment Strategies', description: 'Expert guidance on investments to maximize returns and minimize risks.'
    }
  ]
}
