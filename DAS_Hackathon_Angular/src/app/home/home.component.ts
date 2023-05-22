import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyMonitoringService } from '../loggingService/logging-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router: Router) {
    this.ApplicationInsightsService.logPageView("Home Page Details.", this.router.url);
  }

  ngOnInit(): void {
  }

}
