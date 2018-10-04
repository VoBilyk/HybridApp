import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import angular from 'angular';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { UrlService, UIRouter } from '@uirouter/core';

if (environment.production) {
  enableProdMode();
}

// // Ensure AngularJS destroys itself on hot reloads.
// const rootElement = angular.element(document.body);
// const oldInjector = rootElement.injector();
// if (oldInjector) {
//   oldInjector.get('$rootScope').$destroy();
//   rootElement.data('$injector', null);
// }

// // Ensure Angular destroys itself on hot reloads.
// if (window['ngRef']) {
//   window['ngRef'].destroy();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
.then(pf => {
  const urlService: UrlService = pf.injector.get(UIRouter).urlService;

  // Instruct UIRouter to listen to URL changes
  function startUIRouter() {
    urlService.listen();
    urlService.sync();
  }

   pf.injector.get<NgZone>(NgZone).run(startUIRouter);
})
  .catch(err => console.error(err));

