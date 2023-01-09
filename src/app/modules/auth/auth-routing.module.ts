import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskAppRoutes } from "../shared/enums/TaskAppRoutes";
import { LoginComponent } from "./views/login/login.component";

const routes: Routes = [
  {
    path: TaskAppRoutes.SignInPage,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
