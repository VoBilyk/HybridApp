import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { UIRouterModule, StatesModule } from '@uirouter/angular';
// import { UIRouterUpgradeModule, NgHybridStatesModule } from '@uirouter/angular-hybrid';
import { HomeComponent } from './components/home-component/home.component';

const routes: StatesModule = {
  states: [
    {
      name: 'root',
      url: '',
      component: HomeComponent
    },
    {
      name: 'home',
      url: '/home',
      component: HomeComponent
    },
    {
      name: 'helloapp',
      url: '/home',
      loadChildren: './modules/hello-app.module#HelloAppModule',
    },
    {
      name: 'numbers',
      url: '/numbers',
      loadChildren: './modules/numbers-app.module#NumbersJsAppModule',
    },
    {
      name: 'example',
      url: '/example',
      loadChildren: './modules/example-js-app.module#ExampleJsAppModule',
    },
  ]
};

@NgModule({
  imports: [UIRouterModule.forRoot(routes)],
  exports: [UIRouterModule]
})
export class UiAppRoutingModule {
}
