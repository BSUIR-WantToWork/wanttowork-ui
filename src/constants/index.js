import angular from 'angular';

import State from './state.constant';

export default angular.module('app.constants', [])
    .constant('State', State)
    .name;
