import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from "@emailjs/browser"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {

  intervalId: any;
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  attempt: boolean = false;
  localTime!: Date;

  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: object) {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    });
  }

  getTime() {
    this.intervalId = setInterval(() => {
      this.localTime = new Date();
    }, 1000)
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getTime();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  async send() {
    emailjs.init("U37jeZEtLntIa9YKu");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await emailjs.send("service_wncrkij", "template_bewhtop", {
      from_name: this.registerForm.value.name,
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

}
