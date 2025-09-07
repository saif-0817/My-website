import { Component } from '@angular/core';
import { ButtonReusableComponent } from "../button-reusable/button-reusable.component";
import { ButtonType } from '../../types/button-type';

@Component({
  selector: 'app-title-center-reusable',
  imports: [ButtonReusableComponent],
  templateUrl: './title-center-reusable.component.html',
  styleUrl: './title-center-reusable.component.scss'
})
export class TitleCenterReusableComponent {
 button: ButtonType = {
    btnTxt: 'Know More',
    handler: () => {
      console.log('clicked')
    },
    btnType: 'button',
    btnClass:'button-light'
  }
}
