import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {MainComponent} from './main/main.component'
import {ProductUploadComponent} from './product-upload/product-upload.component'
const routes: Routes = [{path:"",component:MainComponent},
{path:"addNew",component:ProductUploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
