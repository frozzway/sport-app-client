import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { WidgetComponent } from "./public/schedule/components/widget/widget.component";
import { LoginComponent } from "./auth/components/login/login.component";

import { authGuard } from "./auth/auth.guard";
import { ScheduleEditorComponent } from "./admin/schedule-editor/components/main/main.component";


const routes: Routes = [
  {
    path: 'admin',
    canActivateChild: [authGuard],
    children: [
      { path: 'edit', component: ScheduleEditorComponent}
    ]
  },
  { path: 'schedule', component: WidgetComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
