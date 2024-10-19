import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from "@emailjs/browser"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  currentTime: string = '';
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  attempt: boolean = false;
  localTime!: Date;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    });
  }

  getTime() {
    this.localTime = new Date();
    const hours = this.localTime.getHours() % 12 || 12;
    const minutes = this.localTime.getMinutes().toString().padStart(2, '0');
    const seconds = this.localTime.getSeconds().toString().padStart(2, '0');
    const timeOfDay = this.localTime.getHours() < 12 ? 'AM' : 'PM';
    this.currentTime = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
  }

  async send() {
    emailjs.init("U37jeZEtLntIa9YKu");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await emailjs.send("service_wncrkij", "template_bewhtop", {
      from_name: this.registerForm.value.name,
      to_name: "Anas Ismail",
      from_email: this.registerForm.value.email,
      subject: "Contact from Portfolio",
      message: this.registerForm.value.message,
    });
  }

  onSubmit(): void {
    console.log("Submitted", this.registerForm);
    this.attempt = true;
    if (this.registerForm.valid && !this.registerForm.pristine) {
      this.isSubmitted = true;
      this.send()
    }
  }


  ngOnInit(): void {
    this.getTime()
  }
}
