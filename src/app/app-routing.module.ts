import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'helloapp', loadChildren: './modules/hello-app.module#HelloAppModule', pathMatch: 'full' },
  { path: 'numbers', loadChildren: './modules/numbers-app.module#NumbersJsAppModule', pathMatch: 'full' },
  { path: 'example', loadChildren: './modules/example-js-app.module#ExampleJsAppModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
