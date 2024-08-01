import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'hadsup-add-advertiser',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './add-advertiser.component.html',
  styleUrl: './add-advertiser.component.scss'
})
export class AddAdvertiserComponent  implements OnInit {
  advertiserForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.advertiserForm = this.fb.group({
      brandName: ['', Validators.required],
      advertiserName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.advertiserForm.valid) {
      console.log('Form Submitted!', this.advertiserForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onDiscard(): void {
    this.advertiserForm.reset();
  }
}