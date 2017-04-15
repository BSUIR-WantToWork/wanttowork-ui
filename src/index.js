import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import angular from 'angular';
import resource from 'angular-resource';
import messages from 'angular-messages';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';
import formly from 'angular-formly/dist/formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap';

import Components from './components';
import Constants from './constants';
import Containers from './containers';
import Forms from './forms';
import Helpers from './helpers';
import Pages from './pages';
import Resources from './resources';

angular.module('app', [
    resource,
    messages,
    uiBootstrap,
    uiRouter,
    formly,
    formlyBootstrap,

    Components,
    Constants,
    Containers,
    Forms,
    Helpers,
    Pages,
    Resources,
]).config(($urlRouterProvider, $locationProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}).run(($rootScope, State) => {
    'ngInject';

    $rootScope.State = State;
});
