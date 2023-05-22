import { Component, OnInit } from '@angular/core';
import { MyMonitoringService } from '../loggingService/logging-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-detils',
  templateUrl: './products-detils.component.html',
  styleUrls: ['./products-detils.component.css']
})
export class ProductsDetilsComponent implements OnInit {

  constructor(private ApplicationInsightsService: MyMonitoringService, private router: Router) {
    this.ApplicationInsightsService.logPageView("Product Details Page.", this.router.url);
  }

  ngOnInit(): void {
  }

}
