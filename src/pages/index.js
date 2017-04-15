import angular from 'angular';

import HomePage from './home';
import MainPage from './main';
import TestPage from './test';

export default angular.module('app.pages', [
    HomePage,
    MainPage,
    TestPage,
]).name;
