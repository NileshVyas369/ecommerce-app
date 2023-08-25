import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  // initializations
  namePattern = "^[a-zA-Z]+[a-zA-Z]+$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobilePattern = "^((\\+91-?)|0)?[0-9]{10}$";
  isValidFormSubmitted = false;
  constructor(private formBuilder: FormBuilder) {
  }
  // Form
  contactForm = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(this.namePattern)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(this.namePattern)
    ]),
    emailAddress: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(this.mobilePattern)
    ]),
    messageBox: new FormControl(''),
  })
  // Form Submission
  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.contactForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.contactForm.value;
    console.warn(this.contactForm.value);
    console.log(this.isValidFormSubmitted);
    // this.contactForm.resetForm();
  }

  // resetForm() {
  // }

  // Getters
  get firstName() {
    return this.contactForm.get('firstName')
  }
  get lastName() {
    return this.contactForm.get('lastName')
  }
  get emailAddress() {
    return this.contactForm.get('emailAddress')
  }
  get mobileNumber() {
    return this.contactForm.get('mobileNumber')
  }
}
