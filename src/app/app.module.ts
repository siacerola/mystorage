import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartlineComponent } from './pages/chartline/chartline.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { HeadingComponent } from './component/heading/heading.component';
import { RentalComponent } from './pages/rental/rental.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { SettingComponent } from './pages/setting/setting.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThreeLineChartComponent } from './component/three-line-chart/three-line-chart.component';
import { MainChartComponent } from './component/main-chart/main-chart.component';
import { CashFlowChartComponent } from './component/cash-flow-chart/cash-flow-chart.component';
import { LineChartComponent } from './component/line-chart/line-chart.component';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { ListComponent } from './component/list/list.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    ChartlineComponent,
    ItemListComponent,
    HeadingComponent,
    RentalComponent,
    CustomerComponent,
    SettingComponent,
    ThreeLineChartComponent,
    MainChartComponent,
    CashFlowChartComponent,
    LineChartComponent,
    PieChartComponent,
    ListComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
