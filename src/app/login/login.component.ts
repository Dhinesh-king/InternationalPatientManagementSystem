import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { login } from '../model/login';
import { AppComponent } from '../app.component';
import { MainService } from '../main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mainService: MainService, private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
  }

  isLogged = false;
  isAdmin = false;
  public tokenObj: any;
  loginData: login = new login("", "");

  form: FormGroup = this.fb.group({
    username: ['username', Validators.required],
    password: ['password', Validators.required]
  });


  onSubmit() {
    //this.isLogged=true;
    //this.loginData.username=this.form.get("username");
    this.getjwtToken(this.loginData)
  }

  getjwtToken(loginData: login) {
    this.mainService.login(loginData).subscribe(data => {
      localStorage.removeItem("token")
      this.tokenObj = data;
      console.log(data)
      localStorage.setItem("token", this.tokenObj.token)
      this.isLogged = true
      this.router.navigateByUrl('/home');
    }
      , error => {
        console.log(error);
        // this.router.navigateByUrl('/');
      });
  }
}
