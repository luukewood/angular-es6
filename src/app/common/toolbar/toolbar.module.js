import angular from 'angular';
import toolbarComponent from './toolbar.component.js';

const toolbar = angular.module('startApp.common.toolbar', [])
	.component('toolbarComponent', toolbarComponent)
	.name;

export default toolbar;