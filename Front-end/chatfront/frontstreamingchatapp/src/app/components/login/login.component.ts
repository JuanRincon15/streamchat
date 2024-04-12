import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    user: '',
    password: ''
  };
  constructor(private loginService: LoginService , private router:Router){}
  onSubmit(){
    this.loginService.login(this.credentials).subscribe(
      Response => {
        this.router.navigate(['/chat']);
        localStorage.setItem('user',this.credentials.user)
        localStorage.setItem('rol',Response.tipo)
        console.log(Response.message)
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
