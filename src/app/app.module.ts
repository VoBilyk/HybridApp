import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { testjsModule } from './js-modules/test-js-module.js';
import { UIRouter, UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule, NgHybridStatesModule } from '@uirouter/angular-hybrid';

import { AppRoutingModule } from './app-routing.module';
import { UiAppRoutingModule } from './ui-app-routing.module';

import { ScriptLoaderService } from './services/script-loader.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-component/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UiAppRoutingModule
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
