import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log(formData);

      // تقدر هنا تعمل شوية validation إضافي لو عايز تتأكد الباسورد بيساوي الكونفرم مثلا
      if (formData.password !== formData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      // كمل بقى: تبعت الداتا على السيرفر مثلا
    } else {
      console.error('Form is invalid');
    }
  }
}
