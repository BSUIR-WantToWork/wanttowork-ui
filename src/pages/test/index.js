import angular from 'angular';

export default angular.module('app.pages.test', [

]).config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('main.test', {
            url: '/test',
            views: {
                content: {
                    template: '<div>hello</div>'
                }
            }
        });
}).name;
