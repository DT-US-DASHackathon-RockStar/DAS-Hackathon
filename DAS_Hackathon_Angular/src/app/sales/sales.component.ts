import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router : Router) { 
    this.ApplicationInsightsService.logPageView("Sales Page.",this.router.url);
  }

  ngOnInit(): void {
  }

}
