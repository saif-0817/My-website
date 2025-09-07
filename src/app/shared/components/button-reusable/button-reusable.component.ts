import { Component, Input } from '@angular/core';
import { ButtonType } from '../../types/button-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-reusable',
  imports: [CommonModule],
  templateUrl: './button-reusable.component.html',
  styleUrl: './button-reusable.component.scss'
})
export class ButtonReusableComponent {
  @Input()
  customizeBtn: ButtonType = {};

}
