import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentsComponent } from './students/students.component';
import { OrdersComponent } from './orders/orders.component';
import { ProdutsComponent } from './produts/produts.component';
import { SalesComponent } from './sales/sales.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductsDetilsComponent } from './products-detils/products-detils.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/details', component: EmployeeDetailsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/details', component: StudentDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/details', component: OrderDetailsComponent },
  { path: 'products', component: ProdutsComponent },
  { path: 'products/details', component: ProductsDetilsComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'sales/details', component: SalesDetailsComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
