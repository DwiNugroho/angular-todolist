import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { LandingComponent } from './components/landing/landing.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
