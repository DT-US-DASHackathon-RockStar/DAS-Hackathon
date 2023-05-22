import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router : Router) { 
    this.ApplicationInsightsService.logPageView("Employee Page.",this.router.url);
  }

  ngOnInit(): void {

  }

}
