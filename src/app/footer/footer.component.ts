import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  copyRightText: string = "Copyright All Rights Reserved."
  footerDesc: string = "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant"

  // Initialization
  namePattern = "^[a-zA-Z]+[a-zA-Z]+$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isValidFormSubmitted = false;
  subscriptionForm: any;

  log(x: any) { console.log(x); }

  ngOnInit() {
  }

  // Form submission method
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    form.resetForm();
  }
  resetForm() {
    this.subscriptionForm.value = '';
  }
}
