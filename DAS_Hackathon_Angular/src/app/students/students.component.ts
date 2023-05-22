import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router : Router) { 
    this.ApplicationInsightsService.logPageView("Students Page.",this.router.url);
  }

  ngOnInit(): void {
  }

}
