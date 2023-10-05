import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ChartlineComponent } from './pages/chartline/chartline.component';
import { SettingComponent } from './pages/setting/setting.component';
import { PurchasingComponent } from './pages/purchasing/purchasing.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/summary', component: ChartlineComponent },
  { path: 'dashboard/item-list', component: ItemListComponent },
  { path: 'dashboard/settings', component: SettingComponent },
  { path: 'dashboard/purchasing', component: PurchasingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
