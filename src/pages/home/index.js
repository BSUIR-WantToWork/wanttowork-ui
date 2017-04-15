import angular from 'angular';

import HomeController from './home.controller';
import HomeTemplate from './home.template.html';

export default angular.module('app.pages.home', [

]).config(($stateProvider, State) => {
    'ngInject';

    $stateProvider
        .state(State.home, {
            url: '/',
            views: {
                content: {
                    template: HomeTemplate,
                    controller: HomeController,
                    controllerAs: 'home'
                }
            }
        });
}).name;
