import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isFormValid: boolean = true;

  constructor(
    private ApplicationInsightsService: MyMonitoringService,
    private router: Router
  ) {
    this.ApplicationInsightsService.logPageView('Login Page.', this.router.url);
    this.ApplicationInsightsService.logEvent('Event-1', {
      name: 'Das_Hackathon',
    });
  }

  ngOnInit(): void {}

  signIn(event: any) {
    event?.preventDefault();

    console.log('User Sign-In');
    const email = (document.getElementById('emailControl') as HTMLInputElement)
      .value;
    const password = (
      document.getElementById('passwordControl') as HTMLInputElement
    ).value;
    console.log('Email is ' + email);
    console.log('Password is ' + password);

    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isFormValid = true;
      this.router.navigate(['/home']);
    } else {
      this.isFormValid = false;
    }
  }
}
