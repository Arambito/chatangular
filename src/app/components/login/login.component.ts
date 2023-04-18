import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
   formLogin!: FormGroup;
    loading = false;
    submitted = false;

     constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private lService: LoginService,

    ) { }



  ngOnInit() {
        this.formLogin = this.formBuilder.group({
            email_usuario: ['', Validators.required],
            contrasena_usuario: ['', Validators.required]
        });
    }

  onSubmit(){
    console.log(    )
    let user = {
      email_usuario : this.formLogin.value.email_usuario,
      contrasena_usuario : this.formLogin.value.contrasena_usuario

    }
     this.lService.Login(user).subscribe((response) => {

      if(response.status == "success"){
      this.router.navigate(["/chat"])
     }})
  }
}
