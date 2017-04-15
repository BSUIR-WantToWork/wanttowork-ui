import angular from 'angular';

import MainTemplate from './main.template.html';

export default angular.module('app.pages.main', [

]).config(($stateProvider, State) => {
    'ngInject';

    $stateProvider
        .state(State.main, {
            abstract: true,
            views: {
                main: {
                    template: MainTemplate
                }
            }
        });
}).name;
