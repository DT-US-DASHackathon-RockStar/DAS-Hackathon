import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMonitoringService } from './loggingService/logging-service.service';
import { EmployeeComponent } from './employee/employee.component';
import { StudentsComponent } from './students/students.component';
import { ProdutsComponent } from './produts/produts.component';
import { OrdersComponent } from './orders/orders.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsDetilsComponent } from './products-detils/products-detils.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentsComponent,
    ProdutsComponent,
    OrdersComponent,
    SalesComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    EmployeeDetailsComponent,
    StudentDetailsComponent,
    OrderDetailsComponent,
    ProductsDetilsComponent,
    SalesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyMonitoringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
