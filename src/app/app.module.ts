import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { testjsModule } from './js-modules/test-js-module.js';
import { UIRouter, UIRouterModule } from '@uirouter/angular';
// import { AppRoutingModule } from './app-routing.module';
import { UIRouterUpgradeModule, NgHybridStatesModule } from '@uirouter/angular-hybrid';

// import { UiAppRoutingModule } from './ui-app-routing.module';

import { ScriptLoaderService } from './services/script-loader.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home.component';


const routes: NgHybridStatesModule = {
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
    // {
    //   name: 'helloapp',
    //   url: '/home',
    //   loadChildren: './modules/hello-app.module#HelloAppModule',
    // },
    // {
    //   name: 'numbers',
    //   url: '/numbers',
    //   loadChildren: './modules/numbers-app.module#NumbersJsAppModule',
    // },
    // {
    //   name: 'example',
    //   url: '/example',
    //   loadChildren: './modules/example-js-app.module#ExampleJsAppModule',
    // },
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule.forRoot(routes)
  ],
  providers: [ScriptLoaderService],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [testjsModule.name], { strictDi: true });
  }
 }
