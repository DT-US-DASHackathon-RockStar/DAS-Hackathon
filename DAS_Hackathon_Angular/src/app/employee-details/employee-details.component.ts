import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router: Router) {
    this.ApplicationInsightsService.logPageView("Employee Details Page.", this.router.url);
  }

  ngOnInit(): void {
  }

}
