import { Component, OnInit } from '@angular/core';
import { ButtonReusableComponent } from "../../../../shared/components/button-reusable/button-reusable.component";
import { ButtonType } from '../../../../shared/types/button-type';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  imports: [ButtonReusableComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
isSubmitted:boolean = false;
  button: ButtonType = {
    btnTxt: 'Send Message',
    btnClass: 'button-light',
    btnType:'submit'
  }

  constructor(private fb: FormBuilder) { }

 ngOnInit(): void {
  this.contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.maxLength(20)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
}


  submitHandler(){

  if(this.contactForm.invalid){
     this.contactForm.markAllAsTouched()
    return;
  }
console.log(this.contactForm);
this.contactForm.reset();
  }

}
