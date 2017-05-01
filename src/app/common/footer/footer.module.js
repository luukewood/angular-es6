import angular from 'angular';
import footerComponent from './footer.component.js';

const footer = angular.module('startApp.common.footer', [])
	.component('footerComponent', footerComponent)
	.name;


export default footer;