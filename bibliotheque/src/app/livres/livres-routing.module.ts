import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from '../authentification/auth.guard';

const routes: Routes = [
//, canActivate: [AuthGuard]
  { path: 'livres', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'livres/index', component: IndexComponent },
  { path: 'livres/:LivreId/view', component: ViewComponent },
  { path: 'livres/create', component: CreateComponent },
  { path: 'livres/:LivreId/edit', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivresRoutingModule { }
