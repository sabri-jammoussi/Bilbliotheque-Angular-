import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path : 'specialites' , redirectTo :'specialites/index',pathMatch :'full'},
  {path: 'specialites/index',component : IndexComponent},
  {path : 'specialites/:specialiteId/view', component : ViewComponent},
  {path :'specialites/create',component:CreateComponent},
  {path:'specialites/:specialiteId/edit',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialitesRoutingModule { }
