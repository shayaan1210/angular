import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { NgAttributeComponent } from './ng-attribute/ng-attribute.component';
import { NgClassAttComponent } from './ng-class-att/ng-class-att.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  
  {path:'',component:FormComponent},
  {path:'table',component:HeaderComponent},
  {path:'attr',component:NgAttributeComponent},
  {path:'ngclass',component:NgClassAttComponent},
  {path:'**',component:NotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
