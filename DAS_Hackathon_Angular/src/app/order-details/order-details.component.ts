import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router: Router) {
    this.ApplicationInsightsService.logPageView("Order Details Page.", this.router.url);
  }

  ngOnInit(): void {
  }

}
