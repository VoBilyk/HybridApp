//'use strict';
import * as angular from 'angular';


const myComponentDefinition = {
  template: `
          <h1>Root Component</h1>
          <hr>
          <contacts></contacts>
        `
};

const ContactsComponent = {
  template: `
      <h3>Contacts go here.</h3>
    `
};

angular.module('contacts', [])
  .component('contacts', ContactsComponent);

export const SimpleJsApp = angular.module('simpleJsApp', ['contacts'])
  .component('simpleApp', myComponentDefinition);