import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpgradeModule} from '@angular/upgrade/static';
import { setUpLocationSync} from '@angular/router/upgrade';
import { ScriptLoaderService } from '../services/script-loader.service';

@Component({template: ``})
export class EmptyComponent {}

@NgModule({
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([
      {path: '**', component: EmptyComponent}
    ])
  ],
  declarations: [
    EmptyComponent
  ]
})
export class ExampleJsAppModule {
  modulenJsName = 'AngularJSApp';
  moduleJsPath = 'http://localhost/angularjs/angularjsapp.js';

  constructor(upgrade: UpgradeModule, scriptLoaderService: ScriptLoaderService) {
    scriptLoaderService.setExternalScript(this.moduleJsPath)
    .then(() => {
      debugger
      upgrade.bootstrap(document.body, [this.modulenJsName], {strictDi: true});
      setUpLocationSync(upgrade);
    });
  }
 }
