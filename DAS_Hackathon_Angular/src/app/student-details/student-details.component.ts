import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router: Router) {
    this.ApplicationInsightsService.logPageView("Students Details Page.", this.router.url);
  }

  ngOnInit(): void {
  }

}
