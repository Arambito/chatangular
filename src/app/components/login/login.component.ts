import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
   form!: FormGroup;
    loading = false;
    submitted = false;

     constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,

    ) { }

  login(){
    console.log("yes");
  }

  ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

  onSubmit(){
    console.log("yes")
  }
}
