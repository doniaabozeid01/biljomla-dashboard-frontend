import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  // {path:'home', component:HomeComponent},
  // {path:'login', component:LoginComponent},
  // {path:'register', component:RegisterComponent},



    // Layout للمحتوى العام (home, etc)
    {
      path: '', component: MainLayoutComponent, children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' }, // المسار الفارغ سيعيد توجيه المستخدم إلى home
        { path: 'home', component: HomeComponent },

      ]
    },
  
  
    // Layout خاص بالـ Authentication (login, register)
    {
      path: '', component: AuthLayoutComponent, children: [
        // { path: '', redirectTo: '/login', pathMatch: 'full' }, // المسار الفارغ سيعيد توجيه المستخدم إلى login
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'reset-password', component: ResetPasswordComponent },
      ]
    },
  
  
    // إعادة توجيه لأي مسار غير موجود
    { path: '**', redirectTo: '/home' }











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
