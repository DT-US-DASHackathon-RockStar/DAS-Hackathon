import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router : Router) { 
    this.ApplicationInsightsService.logPageView("Products Page.",this.router.url);
  }

  ngOnInit(): void {
  }

}
