import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router : Router) { 
    this.ApplicationInsightsService.logPageView("Orders Page.",this.router.url);
  }

  ngOnInit(): void {
  }

}
