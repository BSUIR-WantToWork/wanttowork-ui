import angular from 'angular';

import HomePage from './home';
import MainPage from './main';

export default angular.module('app.pages', [
    HomePage,
    MainPage,
]).name;
