require('./../sass/_styles.scss');

import commons from './common/common.module.js';
import componentModule from './components/components.module.js';
import appComponent from './app.component.js';

const app = angular.module('startApp', ['ui.router', commons, componentModule])
	.component('appComponent', appComponent)
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('app', {
				url: '',
				abstract: true
			});

		$urlRouterProvider.otherwise('/');
	})
	.name;

export default app; 
