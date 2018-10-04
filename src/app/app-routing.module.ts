import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home-component/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'helloapp', loadChildren: './modules/hello-app.module#HelloAppModule' },
  { path: 'numbers', loadChildren: './modules/numbers-app.module#NumbersJsAppModule' },
  { path: 'example', loadChildren: './modules/example-js-app.module#ExampleJsAppModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
