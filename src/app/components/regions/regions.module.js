import angular from 'angular';
import regionsComponent from './regions.component.js';
import regionsService from './regions.service.js';
/*@ngInject*/
const regionsModule = angular
	.module('startApp.regions', ['ui.router'])
	.component('regionsComponent', regionsComponent)
	.service('regionsService', regionsService)
	.config(function($stateProvider) {
		$stateProvider
			.state('regions', {
				url: '/regions',
				component: 'regionsComponent'
			});

	});

export default regionsModule.name;