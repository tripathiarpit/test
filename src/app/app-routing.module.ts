import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LookupGoalEventsComponent } from './component/events/lookup-events/lookup-goal-events.component';
import {CreateGoalEventComponent} from './component/events/create-goal-event/create-goal-event.component';
import {CreateUserComponent} from './component/user/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: LookupGoalEventsComponent
  },
  {
    path: 'create-goal',
    component: CreateGoalEventComponent
  },
  {
        path: 'create-user',
        component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
