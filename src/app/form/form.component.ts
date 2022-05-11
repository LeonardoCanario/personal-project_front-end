import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        ]
      ],
      name: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
        ]
      ],
      password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        ]
      ],
    })
  }

  signup(){
    const newUser = this.signupForm.getRawValue();
  }

}
