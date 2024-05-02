import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-demo-login-logout';
  username: string = "";
  password: string = "";
  loginError: boolean = false;

  constructor(public authService: AuthService){}

  login(){
    if(this.authService.login(this.username, this.password)){
      console.log("Login successful");
      this.loginError = false;
    }
    else{
      console.log("Invalid Credential")
      this.loginError = true;
    }
  }

  logout(){
    this.authService.logout();
    console.log("Logged out")
  }
}
