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
export class HelloAppModule {
  modulenJsName = 'NgJsHelloApp';
  moduleJsPath = 'http://localhost/angularjs/ngjs-hello.js';

  constructor(upgrade: UpgradeModule, scriptLoaderService: ScriptLoaderService) {
    scriptLoaderService.setExternalScript(this.moduleJsPath)
    .then(() => {
      upgrade.bootstrap(document.body, [this.modulenJsName], {strictDi: true});
      setUpLocationSync(upgrade);
    });
  }
 }
