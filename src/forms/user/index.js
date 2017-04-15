import angular from 'angular';

import UserForm from './user.form';

export default angular.module('app.forms.user', [])
    .constant('UserForm', UserForm)
    .name;
