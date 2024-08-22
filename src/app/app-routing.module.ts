import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductBoxComponent } from './component/product-box/product-box.component';
const routes: Routes = [

  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path:'register', 
    component: RegisterComponent 
  },
  {
    path:'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: '', 
        component: ProductBoxComponent 
      }
    ] 
  }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
