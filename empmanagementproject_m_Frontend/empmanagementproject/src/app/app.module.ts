import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Route,Routes} from '@angular/router';
import { EmpFormComponent } from './componenets/emp-form/emp-form.component'
import { UsersettingsComponent } from './componenets/usersettings/usersettings.component';
import { RigistrationformComponent } from './componenets/rigistrationform/rigistrationform.component';
import { LoginComponent } from './componenets/login/login.component';
import { WelcomeComponent } from './componenets/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';

const rules:Routes=[{path:'',component:WelcomeComponent},{path:'employees',component:EmpListComponent},{path:'empform',component:EmpFormComponent},{path:'updateEmp/:id',component:EmpFormComponent},  {path:"usersettings",component:UsersettingsComponent},{path:'registraionform',component:RigistrationformComponent},{path:'login',component:LoginComponent},
{path:'welcome',component:HomeComponent}




]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    WelcomeComponent,
    EmpFormComponent,
   RigistrationformComponent,
   LoginComponent,
   WelcomeComponent,
   HomeComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rules),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }