import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path : 'editeurs' , redirectTo :'editeurs/index',pathMatch :'full'},
  {path: 'editeurs/index',component : IndexComponent},
  {path : 'editeurs/:editeurId/view', component : ViewComponent},
  {path :'editeurs/create',component:CreateComponent},
  {path:'editeurs/:editeurId/edit',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditeursRoutingModule { }
